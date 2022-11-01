import React from 'react';
import Topic from '../main/topics/topic.jsx';
import Sidebar from './sidebar/sidebar.jsx';

const topics_data = [
    { topic: 'basic', quantity: '150' },
    { topic: 'verbs', quantity: '50' },
    { topic: 'food', quantity: '48' },
    { topic: 'clothes', quantity: '48' }
];

const sidebar_data = [
    { pic: '/flashcardsapp/src/assets/pics/sidebar/sidebar_yourflashcards-icon.svg', sidebar: 'your flashcards' },
    { pic: '/flashcardsapp/src/assets/pics/sidebar/sidebar_history-icon.svg', sidebar: 'history' },
    { pic: '/flashcardsapp/src/assets/pics/sidebar/sidebar_dictionary-icon.svg', sidebar: 'dictionary' }
]

function Main() {
    return (
        <>
            <div className="container">
                {topics_data.map(topic => <Topic data={topic} />)}
                {sidebar_data.map(menu => <Sidebar data={menu} />)}
            </div>
        </>
    );
}

export default Main;