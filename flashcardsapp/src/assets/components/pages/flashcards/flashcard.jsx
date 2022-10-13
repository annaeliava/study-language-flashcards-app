import React from 'react';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';

const btns = [
    { bg: 'E76B6B', icon: '/flashcardsapp/src/assets/pics/answerbtn/no.svg' },
    { bg: '6BB3E7', icon: '/flashcardsapp/src/assets/pics/answerbtn/dictionary.svg' },
    { bg: '92E76B', icon: '/flashcardsapp/src/assets/pics/answerbtn/yes.svg' }
]

function Flashcards() {
    return (
        <>
            <Header />
            <div className="container">
                {btns.map((btns) => <Answer bg={btns.bg} icon={btns.icon} />)}
            </div>
            <Footer />
        </>
    );
}

export default Flashcards;