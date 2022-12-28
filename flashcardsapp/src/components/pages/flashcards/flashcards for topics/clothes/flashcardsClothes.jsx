import React, { useState } from "react";
import styles from '../../Flashcard.module.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import clothes_data from "../../../topics_words/clothes/clothes-topic_data";
import Card from "../../card/Card";

export default function ClothesGame() {
    const [currentIndex, setCurrentIndex] = useState(0);
    //shows previous card
    const handleBack = () => {
        const isFirstCard = currentIndex === 0
        const newIndex = isFirstCard ? clothes_data.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    //shows next card
    const handleNext = () => {
        const isLastCard = currentIndex === clothes_data.length - 1;
        const newIndex = isLastCard ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    return (
        <>
            <div className={styles.container}>
                <div className={styles.cardContainer}>
                    <button className={styles.prevBtn} onClick={handleBack}><ArrowBackIcon /></button>
                    {clothes_data.map(card => <Card data={card} key={card.id} />)[currentIndex]}
                    <button className={styles.nextBtn} onClick={handleNext}><ArrowForwardIcon /></button>
                </div>
                <div className={styles.numbers}>{currentIndex + 1} / {clothes_data.length}</div>
            </div>
        </>
    );
}