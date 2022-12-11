import React, { useState } from 'react';
import Card from './card/Card';
import styles from './Flashcard.module.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import basic_data from '../topics_words/basic/basic-topic_data';

export default function Flashcards() {
    const [currentIndex, setCurrentIndex] = useState(0);
    //shows previous card
    const handleBack = () => {
        const isFirstCard = currentIndex === 0
        const newIndex = isFirstCard ? basic_data.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    //shows next card
    const handleNext = () => {
        const isLastCard = currentIndex === basic_data.length - 1;
        const newIndex = isLastCard ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.cardContainer}>
                    <div className={styles.prevBtn} onClick={handleBack}><ArrowBackIcon /></div>
                    {basic_data.map(card => <Card data={card} key={card.id} />)[currentIndex]}
                    <div className={styles.nextBtn} onClick={handleNext}><ArrowForwardIcon /></div>
                </div>
                <div className={styles.numbers}>{currentIndex + 1} / {basic_data.length}</div>
            </div>
        </>
    );
}
