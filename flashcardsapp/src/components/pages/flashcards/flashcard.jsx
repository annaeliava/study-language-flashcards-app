import React from 'react';
import Card from './card/Card';
import Answer from './answerBtn/Answerbtns.jsx';
import styles from './Flashcard.module.scss';

const answerButtons_data = [
    { background: 'E76B6B', icon: 'img/answerBtns/no.svg', width: '3.9375', height: '4.875' },
    { background: '6BB3E7', icon: 'img/answerBtns/dictionary.svg', width: '3.278125', height: '3.05125' },
    { background: '92E76B', icon: 'img/answerBtns/yes.svg', width: '3.625', height: '3.1875' }
]

const card_data = [
    { topic: 'basics', word: 'house', transcription: '/haʊs/', translation: 'дом', additional: 'здание, жилой дом' }
]

export default function Flashcards() {
    return (
        <>
            <div className={styles.container}>
                {card_data.map(card => <Card data={card} />)}
                <div className={styles.buttonsContainer}>
                    {answerButtons_data.map(button => <Answer data={button} />)}
                </div>
            </div>
        </>
    );
}