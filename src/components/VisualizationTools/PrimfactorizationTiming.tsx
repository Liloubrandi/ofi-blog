import { faClipboard, faClipboardCheck, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import * as React from 'react';
import { randomPrime } from '../../utils/prime';
import styles from './PrimfactorizationTiming.module.scss';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { toBlob } from 'html-to-image';

interface StageProps {
    onStage: () => any;
    label: string;
    result: { calculations: string[]; time_ms?: number };
}

const Stage = (props: StageProps) => {
    return (
        <div className={clsx(styles.stage)}>
            <button className="button button--outline button--primary" onClick={props.onStage}>
                {props.label}
            </button>
            <span style={{ flexGrow: 1 }} />
            {props.result.calculations.map((calc, idx) => {
                return (
                    <span className={clsx('badge', 'badge--secondary', styles.badge)} key={idx}>
                        {calc}
                    </span>
                );
            })}
            {props.result.time_ms !== undefined && (
                <span className={clsx('badge', 'badge--success', styles.badge)}>
                    <FontAwesomeIcon icon={faClock} /> {props.result.time_ms.toFixed(1)} ms
                </span>
            )}
        </div>
    );
};

const hNumber = (num: number) => {
    return num.toLocaleString().replace(/[\.,]/g, "'");
};

const DEFAULT_RESULT = { calculations: [] };

const PrimfactorizationTiming = () => {
    const [digits, setDigits] = React.useState(6);
    const [range, setRange] = React.useState([0, 0]);
    const [stage, setStage] = React.useState(0);
    const [prime1, setPrime1] = React.useState<number>(0);
    const [prime2, setPrime2] = React.useState<number>(0);
    const [tPrime, set_tPrime] = React.useState<number>(-1);
    const [measurements, setMeasures] = React.useState<{ product: number; time: number }[]>([]);

    const [prod, setProd] = React.useState<number>(0);
    const [tMult, set_tMult] = React.useState<number>(-1);

    const [tFact, set_tFact] = React.useState<number>(-1);
    const [factPrime1, setFactPrime1] = React.useState<number>(0);
    const [factPrime2, setFactPrime2] = React.useState<number>(0);
    const [showCopied, setShowCopied] = React.useState(false);
    const ref = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        setStage(0);
        if (digits < 8) {
            setRange([
                Number.parseInt('5'.padEnd(digits, '0'), 10),
                Number.parseInt('5'.padEnd(digits + 1, '0'), 10),
            ]);
        } else if (digits === 8) {
            setRange([
                Number.parseInt('5'.padEnd(digits, '0'), 10),
                Number.parseInt('1'.padEnd(digits + 1, '0'), 10),
            ]);
        }
    }, [digits]);

    React.useEffect(() => {
        if (stage === 3) {
            setMeasures([...measurements, { product: prod, time: tFact }]);
        }
    }, [stage]);

    const onStage1 = () => {
        const t0 = window.performance.now();
        const p1 = randomPrime(range[0], range[1]);
        const p2 = randomPrime(range[0], range[1]);
        setPrime1(Math.min(p1, p2));
        setPrime2(Math.max(p1, p2));
        const ellapsed = window.performance.now() - t0;
        set_tPrime(ellapsed);
        setStage(1);
    };

    const onStage2 = () => {
        const t0 = window.performance.now();
        setProd(prime1 * prime2);
        const ellapsed = window.performance.now() - t0;
        console.log(ellapsed);
        set_tMult(ellapsed);
        setStage(2);
    };

    const onStage3 = () => {
        set_tFact(-1);
        const t0 = window.performance.now();
        let n = 2;
        while (n < prod) {
            const r = prod / n;
            if (r % 1 === 0) {
                setFactPrime1(n);
                setFactPrime2(r);
                break;
            }
            if (n === 2) {
                n++;
            } else {
                n += 2;
            }
        }
        const ellapsed = window.performance.now() - t0;
        set_tFact(ellapsed);
        setStage(3);
    };

    const onCopy = React.useCallback(() => {
        if (ref.current === null) {
            return;
        }
        console.log('new refs');
        toBlob(ref.current, {
            backgroundColor: 'white'
        })
            .then((blob) => {
                return navigator.clipboard.write([
                    new ClipboardItem({
                        ['image/png']: blob as unknown as Promise<Blob>,
                    }),
                ]);
            })
            .then(() => {
                setShowCopied(true);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [ref]);

    React.useEffect(() => {
        if (!showCopied) {
            return;
        }
        const timeoutId = setTimeout(() => setShowCopied(false), 2000);
        return () => clearTimeout(timeoutId);
    }, [showCopied]);
    return (
        <div className={clsx('hero', 'shadow--lw', styles.container)}>
            <div className="container">
                <p className="hero__subtitle">Zeitanalyse Primfaktorzerlegung</p>
                Primzahlen mit
                <div className={clsx('button-group', styles.digits)}>
                    <button
                        className={clsx(
                            'button',
                            'button--sm',
                            'button--outline',
                            'button--primary',
                            digits === 6 && 'button--active'
                        )}
                        onClick={() => setDigits(6)}
                    >
                        6
                    </button>
                    <button
                        className={clsx(
                            'button',
                            'button--sm',
                            'button--outline',
                            'button--primary',
                            digits === 7 && 'button--active'
                        )}
                        onClick={() => setDigits(7)}
                    >
                        7
                    </button>
                    <button
                        className={clsx(
                            'button',
                            'button--sm',
                            'button--outline',
                            'button--primary',
                            digits === 8 && 'button--active'
                        )}
                        onClick={() => setDigits(8)}
                    >
                        8
                    </button>
                </div>
                Stellen
                <Stage
                    onStage={onStage1}
                    label={`Zwei Primzahlen zwische ${hNumber(range[0])} und ${hNumber(range[1])} wählen`}
                    result={
                        stage > 0
                            ? {
                                  calculations: [hNumber(prime1), hNumber(prime2)],
                                  time_ms: tPrime,
                              }
                            : DEFAULT_RESULT
                    }
                />
                {stage > 0 && (
                    <Stage
                        onStage={onStage2}
                        label={`Primzahlprodukt berechnen: ${hNumber(prime1)} * ${hNumber(prime2)}`}
                        result={
                            stage > 1
                                ? {
                                      calculations: [hNumber(prod)],
                                      time_ms: tMult,
                                  }
                                : DEFAULT_RESULT
                        }
                    />
                )}
                {stage > 1 && (
                    <Stage
                        onStage={onStage3}
                        label={`Primzahlen faktorisieren`}
                        result={
                            stage > 2
                                ? {
                                      calculations: [hNumber(factPrime1), hNumber(factPrime2)],
                                      time_ms: tFact,
                                  }
                                : DEFAULT_RESULT
                        }
                    />
                )}
                {measurements.length > 0 && (
                    <>
                        <button
                            className={clsx(
                                'button',
                                'button--outline',
                                'button--sm',
                                showCopied ? 'button--success' : 'button--primary',
                                styles.copy
                            )}
                            onClick={onCopy}
                        >
                            {showCopied ? (
                                <FontAwesomeIcon icon={faClipboardCheck} />
                            ) : (
                                <FontAwesomeIcon icon={faClipboard} />
                            )}
                        </button>
                        <div ref={ref}>
                            <ResponsiveContainer width="100%" height={400}>
                                <ScatterChart
                                    width={500}
                                    height={300}
                                    margin={{
                                        top: 5,
                                        right: 100,
                                        bottom: 80,
                                        left: 20,
                                    }}
                                >
                                    <CartesianGrid />
                                    <XAxis
                                        type="number"
                                        dataKey="product"
                                        name="Produkt"
                                        tickFormatter={(tick) => tick === 0 ? 0 : `${hNumber(tick)}`.slice(0, -12) + ' * 10^12'}
                                        angle={40}
                                        textAnchor="start"
                                    />
                                    <YAxis type="number" dataKey="time" name="Zeit" unit="ms" />
                                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                                    <Scatter name="Mesurements" data={measurements} fill="#8884d8" />
                                </ScatterChart>
                            </ResponsiveContainer>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default PrimfactorizationTiming;