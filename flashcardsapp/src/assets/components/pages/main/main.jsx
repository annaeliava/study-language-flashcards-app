import React from 'react';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';
import Topic from '../main/topics/topic.jsx';
import Sidebar from './sidebar/sidebar.jsx';

const topics = [
    { topic: 'basic', quantity: '150' },
    { topic: 'verbs', quantity: '50' },
    { topic: 'food', quantity: '48' },
    { topic: 'clothes', quantity: '48' }
];

const menu = [
    { pic: '/flashcardsapp/src/assets/pics/sidebar/sidebar_yourflashcards-icon.svg', sidebar: 'your flashcards' },
    { pic: '/flashcardsapp/src/assets/pics/sidebar/sidebar_history-icon.svg', sidebar: 'history' },
    { pic: '/flashcardsapp/src/assets/pics/sidebar/sidebar_dictionary-icon.svg', sidebar: 'dictionary' }
]

function Main() {
    return (
        <>
            <Header />
            <div className="container">
                {topics.map((topics) => <Topic topic={topics.topic} quantity={topics.quantity} />)}
                {menu.map((menu) => <Sidebar pic={menu.pic} sidebar={menu.sidebar} />)}
            </div>
            <Footer />
        </>
    );
}

export default Main;