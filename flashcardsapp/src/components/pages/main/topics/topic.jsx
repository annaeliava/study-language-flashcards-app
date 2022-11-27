import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Topic.module.scss';

function Topic(props) {
    const { data } = props;
    return (
        <>
            <Link to='/{data.linkToTopic}' style={{ textDecoration: 'none' }}>
                <div className={styles.container}>
                    <div className={styles.topic}>{data.topic}</div>
                    <div className={styles.quantity}>{data.quantity} words</div>
                </div>
            </Link>
        </>
    );
}

export default Topic;