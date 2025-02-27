import clsx from 'clsx';
import * as React from 'react';
import styles from './styles.module.scss';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';
import ReactSwitch from 'react-switch';
import CopyImageToClipboard from '../../shared/CopyImageToClipboard';
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const SWITCH_SIZE = { width: 35, height: 18 };
const FrequencyAnalysis = () => {
    const [text, setText] = React.useState('Hallo');
    const [sortAlphabetic, setSortAlphabetic] = React.useState(true);
    const [onlyLetters, setOnlyLetters] = React.useState(false);
    const [indicateUnusedChars, setIndicateUnusedChars] = React.useState(true);
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const freq = {};
        if (indicateUnusedChars) {
            ALPHABET.forEach((k) => (freq[k] = 0));
        }
        let processedText = text.toUpperCase().replace(/\s/g, ' ');
        if (onlyLetters) {
            processedText = processedText.replace(/[^A-Z]/g, '');
        }
        const charCount = processedText.length;
        processedText.split('').forEach((char) => {
            if (/\s/.test(char) || (onlyLetters && !/[A-Z]/.test(char))) {
                return;
            }
            freq[char] = (freq[char] || 0) + 1;
        });
        if (charCount === 0) {
            return setData([]);
        }
        const analyzed = Object.entries(freq).map<{ char: string; count: number }>(([char, cnt]) => ({
            char: char,
            count: (100 * (cnt as number)) / charCount,
        }));
        if (sortAlphabetic) {
            analyzed.sort((a, b) => (a.char > b.char ? 1 : -1));
        } else {
            analyzed.sort((a, b) => b.count - a.count);
        }
        setData(analyzed);
    }, [text, sortAlphabetic, onlyLetters, indicateUnusedChars]);

    return (
        <div className={clsx('hero', 'shadow--lw', styles.container)}>
            <div className="container">
                <p className="hero__subtitle">Häufigkeitsanalyse</p>
                <h4>Klartext</h4>
                <textarea
                    className={clsx(styles.input)}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    rows={5}
                ></textarea>
                <div>
                    <ReactSwitch
                        id="freq-sort-order"
                        onChange={() => setSortAlphabetic(!sortAlphabetic)}
                        checked={sortAlphabetic}
                        {...SWITCH_SIZE}
                        checkedIcon={false}
                        uncheckedIcon={false}
                    />{' '}
                    <label htmlFor="freq-sort-order">
                        {sortAlphabetic ? 'Sortiere alphabetisch' : 'Sortiere nach Häufigkeit'}
                    </label>
                </div>
                <div>
                    <ReactSwitch
                        id="freq-filter"
                        onChange={() => setOnlyLetters(!onlyLetters)}
                        checked={onlyLetters}
                        {...SWITCH_SIZE}
                        checkedIcon={false}
                        uncheckedIcon={false}
                    />{' '}
                    <label htmlFor="freq-filter">{onlyLetters ? 'Nur Buchstaben' : 'Alle Zeichen'}</label>
                </div>
                <div>
                    <ReactSwitch
                        id="freq-indicate-unused"
                        onChange={() => setIndicateUnusedChars(!indicateUnusedChars)}
                        checked={indicateUnusedChars}
                        {...SWITCH_SIZE}
                        checkedIcon={false}
                        uncheckedIcon={false}
                    />{' '}
                    <label htmlFor="freq-indicate-unused">
                        {indicateUnusedChars
                            ? 'Platzhalter für vorkommende Buchstaben'
                            : 'Nur vorkommende Buchstaben'}
                    </label>
                </div>
                <div style={{ maxWidth: '100%', overflow: 'auto' }}>
                    <div style={{ width: 'max(100%, 500px)' }}>
                        <CopyImageToClipboard options={{backgroundColor: 'white'}}>
                            <ResponsiveContainer width="100%" height={400}>
                                <BarChart
                                    data={data}
                                    width={500}
                                    height={300}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 0,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="char" />
                                    <YAxis unit="%" name="foo" />
                                    <Bar dataKey="count" fill="#ffba00" />
                                    <Tooltip
                                        formatter={(value, name, props) => [`${value} %`, 'Häufigkeit']}
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </CopyImageToClipboard>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FrequencyAnalysis;
