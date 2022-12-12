import React, { useState } from "react";
import styles from '../Flashcard.module.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import verbs_data from "../../topics_words/verbs/verbs-topic_data";
import Card from "../card/Card";

export default function VerbsGame() {
    const [currentIndex, setCurrentIndex] = useState(0);
    //shows previous card
    const handleBack = () => {
        const isFirstCard = currentIndex === 0
        const newIndex = isFirstCard ? verbs_data.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    //shows next card
    const handleNext = () => {
        const isLastCard = currentIndex === verbs_data.length - 1;
        const newIndex = isLastCard ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    return (
        <>
            <div className={styles.container}>
                <div className={styles.cardContainer}>
                    <div className={styles.prevBtn} onClick={handleBack}><ArrowBackIcon /></div>
                    {verbs_data.map(card => <Card data={card} key={card.id} />)[currentIndex]}
                    <div className={styles.nextBtn} onClick={handleNext}><ArrowForwardIcon /></div>
                </div>
                <div className={styles.numbers}>{currentIndex + 1} / {verbs_data.length}</div>
            </div>
        </>
    );
}