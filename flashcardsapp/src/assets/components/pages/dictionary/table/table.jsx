import React from "react";
import styles from './table.module.scss';
import 'normalize.css';

export default function Table(props) {
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
                    <div className={styles.tableNumber}>{props.number}</div>
                    <div className={styles.tableWord}>{props.word}</div>
                    <div className={styles.tableTranscription}>{props.transcription}</div>
                    <div className={styles.tableTranslation}>{props.translation}</div>
                    <button className={styles.deleteBtn}>X</button>
                </div>
                <div className={styles.btnContainer}>
                    <button className={styles.addBtn}>+</button>
                </div>
            </div>
        </>
    );
}