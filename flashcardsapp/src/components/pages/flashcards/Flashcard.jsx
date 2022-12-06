import React from 'react';
import Card from './card/Card';
import Answer from './answerBtn/Answerbtns.jsx';
import styles from './Flashcard.module.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const answerButtons_data = [
    { background: '6BB3E7', icon: 'img/answerBtns/dictionary.svg', width: '3.278125', height: '3.05125' },
]

const card_data = [
    { topic: 'basics', word: 'house', transcription: '/haʊs/', translation: 'дом', additional: 'здание, жилой дом' }
]

export default function Flashcards() {
    return (
        <>
            <div className={styles.container}>
                <div className="prevBtn"><ArrowBackIcon /></div>
                {card_data.map(card => <Card data={card} />)}
                <div className="nextBtn"><ArrowForwardIcon /></div>
                <div className={styles.buttonsContainer}>
                    {answerButtons_data.map(button => <Answer data={button} />)}
                </div>
            </div>
        </>
    );
}
