import React from 'react';
import styles from './Topic.module.scss';

function Topic(props) {
    const { data } = props;
    return (
        <>
            <div className={styles.container}>
                <div className={styles.topic}>{data.topic}</div>
                <div className={styles.quantity}>{data.quantity} words</div>
            </div>
        </>
    );
}

export default Topic;