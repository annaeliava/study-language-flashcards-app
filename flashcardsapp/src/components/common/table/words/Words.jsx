import React from "react";
import styles from "../Table.module.scss";

export default function Words(props) {
    const { data } = props;
    return (
        <>
            <div className={styles.innerContainer}>
                <div className={styles.tableNumber}>{data.id}</div>
                <input type='text' name='english' className={styles.tableWord} value={data.english} />
                <input type='text' name='transcription' className={styles.tableTranscription} value={data.transcription} />
                <input type='text' name='russian' className={styles.tableTranslation} value={data.russian} />
                <button className={styles.deleteBtn}>X</button>
            </div>
        </>
    )
};