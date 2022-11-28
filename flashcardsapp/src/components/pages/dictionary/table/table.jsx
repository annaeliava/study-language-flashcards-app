import React from "react";
import styles from './Table.module.scss';
import 'normalize.css';
import AddIcon from '@mui/icons-material/Add';

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
                    <input type='text' name='english' className={styles.tableWord} value={data.word} />
                    <input type='text' name='transcription' className={styles.tableTranscription} value={data.transcription} />
                    <input type='text' name='russian' className={styles.tableTranslation} value={data.translation} />
                    <button className={styles.deleteBtn}>X</button>
                </div>
                <div className={styles.btnContainer}>
                    <button className={styles.addBtn}><AddIcon /></button>
                </div>
                <div className={styles.newWordContainer} style={{ display: 'none' }}>
                    <div className={styles.tableNumber}></div>
                    <input type='text' name='english' className={styles.tableWord} />
                    <input type='text' name='transcription' className={styles.tableTranscription} />
                    <input type='text' name='russian' className={styles.tableTranslation} />
                    <button className={styles.saveBtn}><AddIcon /></button>
                </div>
            </div>
        </>
    );
}