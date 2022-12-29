import React, { useState } from 'react';
import styles from './Dictionary.module.scss';
import 'normalize.css';
import Words from '../../common/table/words/Words';
import Titles from '../../common/table/firstLine/Titles';
import AddNewWord from '../../common/table/addNewWord/addNewWord';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';

const initialWord = {
    id: 1, english: '', russian: '', transcription: ''
};

export default function Dictionary({ createOrUpdate, words, deleteWord }) {
    const [newWord, setNewWord] = useState(initialWord);
    const [input, setInput] = useState(false);

    //shows form for a new word
    const handleNewWord = () => {
        setInput(true);
    };
    //hides form
    const handleCancel = () => {
        setInput(false);
        setNewWord('');
    };
    //adding new word
    const handleSubmit = (e) => {
        e.preventDefault();

        if (newWord.english !== '' && newWord.russian !== '') {
            const temp = { ...newWord };
            temp.id = Math.max(...words.map(table => table.id)) + 1;;
            createOrUpdate(temp);
            setNewWord(initialWord);
            setInput(false);
            alert('saved!');
        } else {
            alert('please, add a new word!');
        }
    };
    //typing in input
    const handleChange = (fieldName, value) => {
        const temp = { ...newWord };
        temp[fieldName] = value;
        setNewWord(temp);
    };

    return (
        <>
            <div className="container">
                <div className={styles.title}>dictionary</div>
                <div className={styles.mainContainer}>
                    <Titles />
                    {
                        words.map(
                            word =>
                                <Words
                                    data={word}
                                    key={word.id}
                                    handleChange={handleChange}
                                    deleteWord={deleteWord}
                                    createOrUpdate={createOrUpdate} />
                        )
                    }
                    <AddNewWord handleNewWord={handleNewWord} />
                    {input ?
                        <>
                            <div className={styles.newWordContainer}>
                                <div className={styles.tableNumber}></div>
                                <input
                                    type='text'
                                    name='english'
                                    data-name={'english'}
                                    className={styles.tableWord}
                                    value={newWord.english}
                                    onChange={(e) => handleChange('english', e.target.value)} />
                                <input
                                    type='text'
                                    name='transcription'
                                    data-name={'transcription'}
                                    className={styles.tableTranscription}
                                    value={newWord.transcription}
                                    onChange={(e) => handleChange('transcription', e.target.value)} />
                                <input
                                    type='text'
                                    name='russian'
                                    data-name={'russian'}
                                    className={styles.tableTranslation}
                                    value={newWord.russian}
                                    onChange={(e) => handleChange('russian', e.target.value)} />
                                <div className={styles.editBtnContainer}>
                                    <button className={styles.saveBtn} onClick={handleSubmit}><DoneIcon /></button>
                                    <button className={styles.cancelBtn} onClick={handleCancel}><ClearIcon /></button>
                                </div>

                            </div>
                        </>
                        : ''}
                </div>
            </div>
        </>
    );
}
