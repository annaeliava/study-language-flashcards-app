import React from 'react';
import styles from './Dictionary.module.scss';
import 'normalize.css';
import Titles from '../../common/table/firstLine/Titles';
import Words from '../../common/table/words/Words';
import New from '../../common/table/newWord/New';
import Add from '../../common/table/addBtn/addBtn';


const vocabulary = [
    { number: '1', word: 'finger', transcription: '[ˈfɪŋɡə]', translation: 'палец' }
];

export default function Dictionary() {
    return (
        <>
            <div className="container">
                <div className={styles.title}>dictionary</div>
                <div className={styles.mainContainer}>
                    <Titles />
                    {vocabulary.map(table => <Words data={table} key={table.id} />)}
                    <Add />
                    <New />
                </div>
            </div>
        </>
    );
}
