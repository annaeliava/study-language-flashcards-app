import React, { useState } from 'react';
import Card from './card/Card';
import Spinner from '../spinner/Spinner';
import styles from './Flashcard.module.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useOutletContext, useNavigate } from 'react-router-dom';

export default function Flashcards() {
    const { words, loading } = useOutletContext();
    const navigate = useNavigate();

    const [currentIndex, setCurrentIndex] = useState(0);
    const [learnt, setLearnt] = useState(0);
    //a counter of the learnt words
    const learntWords = () => {
        setLearnt(learnt + 1);
    }
    //displays alert with the learnt words
    const handleFinish = () => {
        if (learnt < 2) {
            alert(`You have learnt ${learnt} word :( Keep learning!`);
            navigate('/study-language-flashcards-app/dictionary');
        } else if (learnt <= 5) {
            alert(`You have learnt ${learnt} words :( Keep learning!`);
            navigate('/study-language-flashcards-app/dictionary');
        } else {
            alert(`You have learnt ${learnt} words! Good job!`);
            navigate('/study-language-flashcards-app');
        }
    }
    //shows a previous card
    const handleBack = () => {
        const isFirstCard = currentIndex === 0
        const newIndex = isFirstCard ? 0 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    //shows a next card
    const handleNext = () => {
        const isLastCard = currentIndex === words.length - 1;
        const newIndex = isLastCard ? handleFinish() : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <>
            <div className={styles.container}>
                {
                    learnt > 0 ?
                        <div className={styles.counter}>
                            You've learnt {learnt} {learnt < 2 ? 'word' : 'words'}!
                        </div>
                        : ''
                }
                <div className={styles.cardContainer}>
                    <button className={styles.prevBtn} onClick={handleBack}>
                        <ArrowBackIcon />
                    </button>
                    {loading ?
                        words.map(
                            card =>
                                <Card
                                    data={card}
                                    key={card.id}
                                    learntWords={learntWords} />)
                        [currentIndex]
                        :
                        <Spinner />
                    }
                    <button className={styles.nextBtn} onClick={handleNext}>
                        <ArrowForwardIcon />
                    </button>
                </div>
                <div className={styles.numbers}>{currentIndex + 1} / {words.length}</div>
            </div>
        </>
    );
}
