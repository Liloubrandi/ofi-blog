import clsx from 'clsx';
import * as React from 'react';
import styles from './styles.module.scss';
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const sanitizer = (text: string) => {
    return text.toUpperCase().replace(/\s+/g, ' ');
};

const Caesar = () => {
    const [text, setText] = React.useState('');
    const [key, setKey] = React.useState('D');
    const [cipherText, setCipherText] = React.useState('');
    const [source, setSource] = React.useState<'text' | 'cipher'>('text');

    React.useEffect(() => {
        if (source !== 'text' || text.length === 0) {
            return;
        }
        const shift = ALPHABET.indexOf(key);
        const cipher = text.split('').map((char) => {
            if (!ALPHABET.includes(char)) {
                return char;
            }
            return ALPHABET[(ALPHABET.indexOf(char) + shift) % ALPHABET.length];
        });
        return setCipherText(cipher.join(''));
    }, [text, key]);

    React.useEffect(() => {
        const shift = ALPHABET.indexOf(key);
        if (source !== 'cipher' || cipherText.length === 0) {
            return;
        }
        const txt = cipherText.split('').map((char) => {
            if (!ALPHABET.includes(char)) {
                return char;
            }
            return ALPHABET[(ALPHABET.length + ALPHABET.indexOf(char) - shift) % ALPHABET.length];
        });
        return setText(txt.join(''));
    }, [cipherText, key]);

    return (
        <div className={clsx('hero', 'shadow--lw', styles.container)}>
            <div className="container">
                <p className="hero__subtitle">Caesar-Chiffre</p>
                <h4>Klartext</h4>
                <textarea
                    className={clsx(styles.input)}
                    value={text}
                    onChange={(e) => {
                        const pos = Math.max(e.target.selectionStart, e.target.selectionEnd);
                        setSource('text');
                        setText(sanitizer(e.target.value));
                        setTimeout(() => e.target.setSelectionRange(pos, pos), 0);
                    }}
                    rows={5}
                    placeholder="Klartext"
                ></textarea>
                <h4>
                    Schlüssel: <span className="badge badge--primary">{key}</span>
                </h4>
                <div className={styles.caesarKey}>
                    <ul className={clsx('pills', styles.pills)}>
                        {ALPHABET.map((char, idx) => {
                            return (
                                <li
                                    className={clsx('pills__item', key === char && 'pills__item--active')}
                                    onClick={() => setKey(char)}
                                    key={char}
                                >
                                    {char}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <h4>Geheimtext</h4>
                <textarea
                    className={clsx(styles.input)}
                    value={cipherText}
                    onChange={(e) => {
                        const pos = Math.max(e.target.selectionStart, e.target.selectionEnd);
                        setSource('cipher');
                        setCipherText(sanitizer(e.target.value));
                        setTimeout(() => e.target.setSelectionRange(pos, pos), 0);
                    }}
                    rows={5}
                    placeholder="Caesar Verschlüsselter Geheimtext"
                ></textarea>
            </div>
        </div>
    );
};

export default Caesar;
