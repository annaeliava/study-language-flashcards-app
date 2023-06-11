import React from 'react';
import Topic from './topics/Topic.jsx';
import Sidebar from './sidebar/Sidebar.jsx';
import styles from './Main.module.scss';
import basic_data from '../topics_words/basic/basic-topic_data.js';
import verbs_data from '../topics_words/verbs/verbs-topic_data.js';
import food_data from '../topics_words/food/food-topic_data.js';
import clothes_data from '../topics_words/clothes/clothes-topic_data.js';

const topics_data = [
    { topic: basic_data[0].topic, quantity: basic_data.length, linkToTopic: 'basic' },
    { topic: verbs_data[0].topic, quantity: verbs_data.length, linkToTopic: 'verbs' },
    { topic: food_data[0].topic, quantity: food_data.length, linkToTopic: 'food' },
    { topic: clothes_data[0].topic, quantity: clothes_data.length, linkToTopic: 'clothes' }
];

const sidebar_data = [
    { sidebar: 'flashcards', linkTo: 'game' },
    { sidebar: 'dictionary', linkTo: 'dictionary' }
]

export default function Main() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.topicContainer}>
                    {topics_data.map((topic, index) => <Topic data={topic} key={index} />)}
                </div>
                <div className={styles.sidebarContainer}>
                    {sidebar_data.map((menu, index) => <Sidebar data={menu} key={index} />)}
                </div>
            </div>
        </>
    );
}