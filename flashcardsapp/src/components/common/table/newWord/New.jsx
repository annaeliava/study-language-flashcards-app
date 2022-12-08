import React from "react";
import styles from "../Table.module.scss";
import AddIcon from '@mui/icons-material/Add';

export default function New() {
    return (
        <>
            <div className={styles.newWordContainer}>
                <div className={styles.tableNumber}>*</div>
                <input type='text' name='english' className={styles.tableWord} />
                <input type='text' name='transcription' className={styles.tableTranscription} />
                <input type='text' name='russian' className={styles.tableTranslation} />
                <button className={styles.saveBtn}><AddIcon /></button>
            </div>
        </>
    );
}