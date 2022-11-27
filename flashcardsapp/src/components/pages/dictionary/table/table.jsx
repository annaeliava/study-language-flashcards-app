import React from "react";
import styles from './Table.module.scss';
import 'normalize.css';

export default function Table(props) {
    const { data } = props;
    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.titleContainer}>
                    <div className={styles.tableNumberTitle}>№</div>
                    <div className={styles.tableWordTitle}>word</div>
                    <div className={styles.tableTranscriptionTitle}>transcription</div>
                    <div className={styles.tableTranslationTitle}>translation</div>
                </div>
                <div className={styles.innerContainer}>
                    <div className={styles.tableNumber}>{data.number}</div>
                    <div className={styles.tableWord}>{data.word}</div>
                    <div className={styles.tableTranscription}>{data.transcription}</div>
                    <div className={styles.tableTranslation}>{data.translation}</div>
                    <button className={styles.deleteBtn}>X</button>
                </div>
                <div className={styles.btnContainer}>
                    <button className={styles.addBtn}>+</button>
                </div>
            </div>
        </>
    );
}