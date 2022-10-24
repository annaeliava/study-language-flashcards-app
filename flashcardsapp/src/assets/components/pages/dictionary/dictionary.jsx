import React from 'react';
import Table from './table/table.jsx';
import styles from './dictionary.module.scss';
import 'normalize.css';

const voc = [
    { number: '1', word: 'finger', transcription: '[ˈfɪŋɡə]', translation: 'палец' }
];

export default function Dictionary() {
    return (
        <>
            <div className="container">
                <div className={styles.title}>dictionary</div>
                {voc.map(voc => < Table number={voc.number} word={voc.word} transcription={voc.transcription} translation={voc.translation} />)}
            </div>
        </>
    );
}