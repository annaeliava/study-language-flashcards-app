import React from "react";
import styles from "../Table.module.scss";
import AddIcon from '@mui/icons-material/Add';

export default function AddNewWord(props) {
    const { handleNewWord } = props;
    return (
        <>
            <div className={styles.btnContainer}>
                <button className={styles.addBtn} onClick={() => handleNewWord()}><AddIcon /></button>
            </div>
        </>
    );
}