import React, { useState } from 'react';
import styles from './Card.module.scss';

Card.defaultProps = {
    topic: '...',
    word: 'Hello',
    transcription: 'World',
    translation: 'Sorry'
};

export default function Card(props) {
    const { data } = props;
    const [pressed, setPressed] = useState(false);

    const handleChange = () => {
        setPressed(!pressed);
    }
    return (
        <>
            <div className={`${styles.container} ${pressed ? styles.showTranslation : ''}`} onClick={handleChange}>
                <div className={styles.cardBody}>
                    <div className={styles.topic}>{data.topic}</div>
                    <div className={styles.word}>{data.word}</div>
                    <div className={styles.transcription}>{data.transcription}</div>
                    <div className={styles.translation}>{data.translation}</div>
                    <div className={styles.translations}>{data.additional}</div>
                </div>
                <div className={styles.numbers}>1/150</div>
            </div>
        </>
    );
}