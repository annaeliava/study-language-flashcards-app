import React from 'react';
import Topic from './topics/Topic.jsx';
import Sidebar from './sidebar/Sidebar.jsx';
import styles from './Main.module.scss';

const topics_data = [
    { topic: 'basic', quantity: '41', linkToTopic: 'basic' },
    { topic: 'verbs', quantity: '50', linkToTopic: 'verbs' },
    { topic: 'food', quantity: '48', linkToTopic: 'food' },
    { topic: 'clothes', quantity: '46', linkToTopic: 'clothes' }
];

const sidebar_data = [
    { pic: 'img/sidebar_dictionary-icon.svg', sidebar: 'your flashcards', linkTo: 'game' },
    { pic: 'img/sidebar_dictionary-icon.svg', sidebar: 'dictionary', linkTo: 'dictionary' }
]

function Main() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.topicContainer}>
                    {topics_data.map(topic => <Topic data={topic} />)}
                </div>
                <div className={styles.sidebarContainer}>
                    {sidebar_data.map(menu => <Sidebar data={menu} />)}
                </div>
            </div>
        </>
    );
}

export default Main;