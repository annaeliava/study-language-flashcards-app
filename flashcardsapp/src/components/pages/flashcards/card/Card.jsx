import React, { useState } from 'react';
import styles from './Card.module.scss';

export default function Card(props) {
    const { data, learntWords } = props;
    const [pressed, setPressed] = useState(false);
    //shows translation and word+transcription
    const handleChange = () => {
        setPressed(!pressed);
        learntWords();
    };
    return (
        <>
            <div className={`${styles.container} ${pressed ? styles.showTranslation : ''}`} onClick={handleChange}>
                <div className={styles.cardBody}>
                    <div className={styles.topic}>{data.topic || '...'}</div>
                    <div className={styles.word}>{data.english || 'Sorry'}</div>
                    <div className={styles.transcription}>{data.transcription}</div>
                    <div className={styles.translation}>{data.russian || 'something went wrong'}</div>
                    <div className={styles.translations}>{data.additional}</div>
                </div>
            </div>
        </>
    );
}

/*Card.defaultProps = {
    topic: '...',
    english: 'Hello',
    transcription: 'World',
    russian: 'Sorry'
}; почему не работает */