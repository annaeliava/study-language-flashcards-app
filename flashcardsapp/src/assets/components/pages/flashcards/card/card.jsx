import React, { useState } from 'react';
import styles from './Card.module.scss';

Card.defaultProps = {
    topic: '...',
    word: 'Hello',
    transcription: 'World',
    translation: 'Sorry'
};

export default function Card(props) {
    const [pressed, setPressed] = useState(false);

    const handleChange = () => {
        setPressed(!pressed);
    }
    return (
        <>
            <div className={`${styles.container} ${pressed ? styles.showTranslation : ''}`} onClick={handleChange}>
                <div className={styles.cardBody}>
                    <div className={styles.topic}>{props.topic}</div>
                    <div className={styles.word}>{props.word}</div>
                    <div className={styles.transcription}>{props.transcription}</div>
                    <div className={styles.translation}>{props.translation}</div>
                    <div className={styles.translations}>{props.additional}</div>
                </div>
                <div className={styles.numbers}>1/150</div>
            </div>
        </>
    );
}