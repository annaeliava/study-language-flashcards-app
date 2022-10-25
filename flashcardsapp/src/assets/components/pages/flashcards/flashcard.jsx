import React from 'react';
import Card from './card/card';

const answerButtons_data = [
    { bg: 'E76B6B', icon: '/flashcardsapp/src/assets/pics/answerbtn/no.svg' },
    { bg: '6BB3E7', icon: '/flashcardsapp/src/assets/pics/answerbtn/dictionary.svg' },
    { bg: '92E76B', icon: '/flashcardsapp/src/assets/pics/answerbtn/yes.svg' }
]

export default function Flashcards() {
    return (
        <>
            <Card />
            <div className="container">
                {answerButtons_data.map(button => <Answer bg={button.bg} icon={button.icon} />)}
            </div>
        </>
    );
}