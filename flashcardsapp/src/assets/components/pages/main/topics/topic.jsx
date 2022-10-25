import React from 'react';
import styles from './Topic.module.scss';

function Topic(props) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.topic}>{props.topic}</div>
                <div className={styles.quantity}>{props.quantity} words</div>
            </div>
        </>
    );
}

export default Topic;