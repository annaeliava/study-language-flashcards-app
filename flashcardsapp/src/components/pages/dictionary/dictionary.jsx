import React from 'react';
import Table from './table/Table.jsx';
import styles from './Dictionary.module.scss';
import 'normalize.css';

const vocabulary = [
    { number: '1', word: 'finger', transcription: '[ˈfɪŋɡə]', translation: 'палец' }
];

export default function Dictionary() {
    return (
        <>
            <div className="container">
                <div className={styles.title}>dictionary</div>
                {vocabulary.map(word => < Table data={word} />)}
            </div>
        </>
    );
}