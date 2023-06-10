import styles from './Root.module.scss';
import React, {
    useState, 
    useEffect, 
    useContext
} from 'react';
import {Outlet} from 'react-router-dom';
import {Header, Footer} from '../index';
import APIContext from '../../../apiContext';
import ScrollToTop from '../helpers/ScrollToTop';

export default function Root() {
    const [words, setWords] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const apiData = useContext(APIContext);

    useEffect(() => {
        apiData.getWordsData().then (
            (result) => {
                setLoading(true);
                setWords(result);
            },
            (error) => {
                setLoading(false);
                setError(error);
            }
        )
    }, [setWords, apiData]);

    const createOrUpdate = (newWord) => {
    const wordIndex = words.findIndex(word => word.id === newWord.id);
    let newWords;
    if(wordIndex !== -1) {
        newWords = [...words.slice(0, wordIndex), newWord, ...words.slice(wordIndex + 1)];
    } else {
        newWords = [...words, newWord];
    }
    setWords(newWords);
    };

  //deletes a word
    const deleteWord = (wordID) => {
    const filteredWords = words.filter(word => word.id !== wordID);
    setWords(filteredWords);
};

    const context = {words, createOrUpdate, deleteWord, loading, setLoading};

    return (
        <>
        <ScrollToTop/>
        <div className={styles.App}>
            <Header />
            <main>
                <Outlet context={context} />
            </main>
            <Footer />
        </div>
        </>
    );
}