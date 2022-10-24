import React from 'react';

const btns = [
    { bg: 'E76B6B', icon: '/flashcardsapp/src/assets/pics/answerbtn/no.svg' },
    { bg: '6BB3E7', icon: '/flashcardsapp/src/assets/pics/answerbtn/dictionary.svg' },
    { bg: '92E76B', icon: '/flashcardsapp/src/assets/pics/answerbtn/yes.svg' }
]

function Flashcards() {
    return (
        <>
            <div className="container">
                {btns.map(btns => <Answer bg={btns.bg} icon={btns.icon} />)}
            </div>
        </>
    );
}

export default Flashcards;