import React, { useState } from 'react';
import styles from './Dictionary.module.scss';
import 'normalize.css';
import Words from '../../common/table/words/Words';
import New from '../../common/table/newWord/New';
import Titles from '../../common/table/firstLine/Titles';
import AddNewWord from '../../common/table/addNewWord/addNewWord';

const vocabulary = [
    { id: 1, english: 'finger', transcription: '[ˈfɪŋɡə]', russian: 'палец' }
];

export default function Dictionary() {
    const [newWord, setNewWord] = useState(false);
    //shows form for new word
    const handleNewWord = () => {
        setNewWord(true);
    };
    //hides form 
    const saveNewWord = () => {
        setNewWord(false);
    };

    return (
        <>
            <div className="container">
                <div className={styles.title}>dictionary</div>
                <div className={styles.mainContainer}>
                    <Titles />
                    {vocabulary.map(table => <Words data={table} key={table.id} />)}
                    <AddNewWord handleNewWord={handleNewWord} />
                    {newWord ? <New saveNewWord={saveNewWord} /> : ''}
                </div>
            </div>
        </>
    );
}
