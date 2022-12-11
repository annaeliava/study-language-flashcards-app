import React from 'react';
import Topic from './topics/Topic.jsx';
import Sidebar from './sidebar/Sidebar.jsx';
import styles from './Main.module.scss';
import basic_data from '../topics_words/basic/basic-topic_data.js';
import verbs_data from '../topics_words/verbs/verbs-topic_data.js';
import food_data from '../topics_words/food/food-topic_data.js';
import clothes_data from '../topics_words/clothes/clothes-topic_data.js';

const topics_data = [
    { topic: 'basic', quantity: basic_data.length + 1, linkToTopic: 'basic' },
    { topic: 'verbs', quantity: verbs_data.length + 1, linkToTopic: 'verbs' },
    { topic: 'food', quantity: food_data.length + 1, linkToTopic: 'food' },
    { topic: 'clothes', quantity: clothes_data.length + 1, linkToTopic: 'clothes' }
];

const sidebar_data = [
    { pic: 'img/sidebar_dictionary-icon.svg', sidebar: 'flashcards', linkTo: 'game' },
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
