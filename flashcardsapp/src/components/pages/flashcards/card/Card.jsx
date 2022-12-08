import React, { useState } from 'react';
import styles from './Card.module.scss';

export default function Card(props) {
    const { data } = props;
    const [pressed, setPressed] = useState(false);

    const handleChange = () => {
        setPressed(!pressed);
    };
    return (
        <>
            <div className={`${styles.container} ${pressed ? styles.showTranslation : ''}`} onClick={handleChange}>
                <div className={styles.cardBody}>
                    <div className={styles.topic}>{data.topic}</div>
                    <div className={styles.word}>{data.english}</div>
                    <div className={styles.transcription}>{data.transcription}</div>
                    <div className={styles.translation}>{data.russian}</div>
                    <div className={styles.translations}>{data.additional}</div>
                </div>
                <div className={styles.numbers}>1/150</div>
            </div>
        </>
    );
}

Card.defaultProps = {
    topic: '...',
    english: 'Hello',
    transcription: 'World',
    russian: 'Sorry'
}; //почему не работает 