import React from "react";
import styles from './table.module.scss';
import 'normalize.css';

function Table(props) {
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
                    <button className={styles.deleteBtn}>
                        <img src="../../../../assets/pics/dictionary/deleteBtn.svg" alt="delte" className={styles.deletePic} />
                    </button>
                </div>
                <div className={styles.addBtn}>
                    <div className={styles.addNewWord}>+</div>
                </div>
            </div>
        </>
    );
}

export default Table;