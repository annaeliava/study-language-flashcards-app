import React, { useEffect, useRef } from "react";
import styles from "../Table.module.scss";
import DoneIcon from '@mui/icons-material/Done';

export default function New(props) {
    const { handleSubmit, handleChange } = props;

    const refCard = useRef();

    useEffect(() => refCard.current.focus(), []);

    return (
        <>
            <div className={styles.newWordContainer}>
                <div className={styles.tableNumber}>*</div>
                <input type='text' name='english' className={styles.tableWord} ref={refCard} onChange={handleChange} />
                <input type='text' name='transcription' className={styles.tableTranscription} onChange={handleChange} />
                <input type='text' name='russian' className={styles.tableTranslation} onChange={handleChange} />
                <button className={styles.saveBtn} onClick={handleSubmit} onChange={handleChange}><DoneIcon /></button>
            </div>
        </>
    );
}