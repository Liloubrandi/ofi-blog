import axios, { CancelTokenSource, Method } from 'axios';
import { debounce } from 'lodash';
import { action, computed, makeObservable, observable, reaction } from 'mobx';
import { umamiReport } from '../helpers/umami';
import { RootStore, rootStore } from '../stores/stores';
import { IModel } from './iModel';
type RequestState = 'init' | 'save' | 'done' | 'pending' | 'deleted' | 'error';

export default class SaveService {
    private readonly rootStore: RootStore;
    @observable
    method: Method;

    @observable
    state: RequestState = 'init';

    @observable
    private _isOffline: boolean = false;

    cancelToken: CancelTokenSource = axios.CancelToken.source();

    @observable.ref
    model: IModel;
    endpoint: (model: IModel, CancelTokenSource) => Promise<any>;
    constructor(model: IModel, endpoint: (model: IModel, CancelTokenSource) => Promise<any>) {
        this.rootStore = rootStore;
        this.endpoint = endpoint;
        this.model = model;
        makeObservable(this);
        reaction(
            () => this._isOffline,
            (isOffline) => {
                this.rootStore.msalStore.setApiOfflineState(isOffline);
            }
        );
        reaction(
            () => this.model.data,
            (props) => {
                this.save();
            }
        );
    }

    @computed
    get isOffline() {
        return this.rootStore.msalStore.isApiOffline;
    }

    @action
    cancelApiRequests() {
        this.cancelToken.cancel('Requests canceled');
        this.cancelToken = axios.CancelToken.source();
    }

    @action
    saveNow() {
        this.save();
        return this.save.flush();
    }

    save = debounce(this._save, 1000, { leading: false, trailing: true, maxWait: 5000 });

    @action
    _save() {
        if (!this.rootStore.msalStore.loggedIn) {
            return;
        }
        const { isMyView } = this.rootStore.userStore;
        if (!this.model.canUpdate || !isMyView) {
            return Promise.resolve({
                updated_at: new Date().toISOString(),
                state: 'ok',
            });
        }
        this.cancelApiRequests();
        this.state = 'save';

        return this.rootStore.msalStore
            .withToken()
            .then((ok) => {
                if (ok) {
                    umamiReport(`update-doc-${this.model.type}`, `${this.model.webKey}`);
                    return this.endpoint(this.model, this.cancelToken);
                }
            })
            .then(
                action((res) => {
                    this._isOffline = false;
                    this.state = 'done';
                    return res;
                })
            )
            .catch(
                action((error) => {
                    console.warn('err', error);
                    this.state = 'error';
                    this._isOffline = true;
                })
            );
    }
}