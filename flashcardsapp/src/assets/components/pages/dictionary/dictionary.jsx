import React from 'react';
import Table from './table/table.jsx';
import styles from './dictionary.module.scss';
import 'normalize.css';

const voc = [
    { number: '1', word: 'finger', transcription: '[ˈfɪŋɡə]', translation: 'палец' }
];

function Dictionary() {
    return (
        <>
            <div className="container">
                <div className={styles.title}>dictionary</div>
                <Table />
            </div>
        </>
    );
}

export default Dictionary;