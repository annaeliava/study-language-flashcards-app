import React, { useState } from 'react';
import styles from './Dictionary.module.scss';
import 'normalize.css';
import Words from '../../common/table/words/Words';
import Titles from '../../common/table/firstLine/Titles';
import AddNewWord from '../../common/table/addNewWord/addNewWord';
import DoneIcon from '@mui/icons-material/Done';

const vocabulary = [
    { id: 1, english: 'finger', transcription: '[ˈfɪŋɡə]', russian: 'палец' }
];

export default function Dictionary() {
    const [words, setWords] = useState(vocabulary);
    const [input, setInput] = useState(false);
    const [english, setEnglish] = useState('');
    const [transcription, setTranscription] = useState('');
    const [russian, setRussian] = useState('');
    //shows form for new word
    const handleNewWord = () => {
        setInput(true);
    };
    //adding new word
    const handleSubmit = (e) => {
        e.preventDefault();
        const newId = Math.max(...words.map(table => table.id)) + 1;
        setWords([...words, { ...english, ...transcription, ...russian, id: newId }]);
        setEnglish('');
        setTranscription('');
        setRussian('');
        setInput(false);
    };
    //typing in input
    const handleChangeEng = (e) => {
        setEnglish(e.target.value);
    };
    const handleChangeTranscr = (e) => {
        setTranscription(e.target.value);
    };
    const handleChangeRus = (e) => {
        setRussian(e.target.value);
    };
    //delete a word
    const deleteWord = (wordID) => {
        setWords(words.filter(table => table.id !== wordID));
    };

    return (
        <>
            <div className="container">
                <div className={styles.title}>dictionary</div>
                <div className={styles.mainContainer}>
                    <Titles />
                    {words.map(table => <Words data={table} key={table.id} deleteWord={deleteWord} />)}
                    <AddNewWord handleNewWord={handleNewWord} />
                    {input ?
                        <>
                            <div className={styles.newWordContainer}>
                                <div className={styles.tableNumber}>*</div>
                                <input type='text' name='english' className={styles.tableWord} onChange={handleChangeEng} value={english} />
                                <input type='text' name='transcription' className={styles.tableTranscription} onChange={handleChangeTranscr} value={transcription} />
                                <input type='text' name='russian' className={styles.tableTranslation} onChange={handleChangeRus} value={russian} />
                                <button className={styles.saveBtn} onClick={handleSubmit}><DoneIcon /></button>
                            </div>
                        </>
                        : ''}
                </div>
            </div>
        </>
    );
}
