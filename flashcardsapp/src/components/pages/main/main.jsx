import React from 'react';
import Topic from './topics/Topic.jsx';
import Sidebar from './sidebar/Sidebar.jsx';

const topics_data = [
    { topic: 'basic', quantity: '41', linkToTopic: 'basic' },
    { topic: 'verbs', quantity: '50', linkToTopic: 'verbs' },
    { topic: 'food', quantity: '48', linkToTopic: 'food' },
    { topic: 'clothes', quantity: '48', linkToTopic: 'clothes' }
];

const sidebar_data = [
    { pic: 'img/sidebar_yourflashcards-icon.svg', sidebar: 'your flashcards' },
    { pic: 'img/sidebar_history-icon.svg', sidebar: 'history' },
    { pic: 'img/sidebar_dictionary-icon.svg', sidebar: 'dictionary' }
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