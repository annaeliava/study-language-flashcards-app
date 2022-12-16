import React, { useEffect, useRef } from "react";
import styles from "../Table.module.scss";
import DoneIcon from '@mui/icons-material/Done';

export default function New(props) {
    const { saveNewWord } = props;

    const refCard = useRef();

    useEffect(() => refCard.current.focus(), []);

    return (
        <>
            <div className={styles.newWordContainer}>
                <div className={styles.tableNumber}>*</div>
                <input type='text' name='english' className={styles.tableWord} ref={refCard} />
                <input type='text' name='transcription' className={styles.tableTranscription} />
                <input type='text' name='russian' className={styles.tableTranslation} />
                <button className={styles.saveBtn} onClick={saveNewWord}><DoneIcon /></button>
            </div>
        </>
    );
}