import React from 'react';
import Card from './card/card';
import Answer from './answerBtn/answerbtns.jsx';
import styles from './Flashcard.module.scss';

const answerButtons_data = [
    { bg: 'E76B6B', icon: '/flashcardsapp/src/assets/pics/answerbtn/no.svg' },
    { bg: '6BB3E7', icon: '/flashcardsapp/src/assets/pics/answerbtn/dictionary.svg' },
    { bg: '92E76B', icon: '/flashcardsapp/src/assets/pics/answerbtn/yes.svg' }
]

const card_data = [
    { topic: 'basics', word: 'house', transcription: '/haʊs/', translation: 'дом', additional: 'здание, жилой дом' }
]

export default function Flashcards() {
    return (
        <>
            <div className={styles.container}>
                {card_data.map(card => <Card topic={card.topic} word={card.word} transcription={card.transcription} translation={card.translation} additional={card.additional} />)}
                {/*{answerButtons_data.map(button => <Answer bg={button.bg} icon={button.icon} />)}*/}
            </div>
        </>
    );
}