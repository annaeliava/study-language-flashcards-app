import React, { useState } from "react";
import styles from "../Table.module.scss";
import AddIcon from '@mui/icons-material/Add';

export default function New() {
    const [number, setNumber] = useState(0);

    let count = () => {
        setNumber(currentNumber => currentNumber + 1)
    }
    return (
        <>
            <div className={styles.newWordContainer}>
                <div className={styles.tableNumber}>{number}</div>
                <input type='text' name='english' className={styles.tableWord} />
                <input type='text' name='transcription' className={styles.tableTranscription} />
                <input type='text' name='russian' className={styles.tableTranslation} />
                <button className={styles.saveBtn}><AddIcon /></button>
            </div>
        </>
    )
};