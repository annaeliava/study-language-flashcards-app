import React from 'react';
import styles from './AnswerBtn.module.scss';

export default function Answer(props) {
    return (
        <>
            <button className={styles.button} style={{ backgroundColor: '#{props.bg}' }}>
                <img src='{props.icon}' />
            </button>
        </>
    );
}