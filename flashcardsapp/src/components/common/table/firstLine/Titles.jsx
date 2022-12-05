import React from "react";
import 'normalize.css';
import styles from '../Table.module.scss';

export default function Titles() {
    return (
        <>
            <div className={styles.titleContainer}>
                <div className={styles.tableNumberTitle}>№</div>
                <div className={styles.tableWordTitle}>word</div>
                <div className={styles.tableTranscriptionTitle}>transcription</div>
                <div className={styles.tableTranslationTitle}>translation</div>
            </div>
        </>
    )
};