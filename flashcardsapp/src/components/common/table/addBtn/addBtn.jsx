import React from "react";
import styles from "../Table.module.scss";
import AddIcon from '@mui/icons-material/Add';

export default function Add() {
    return (
        <>
            <div className={styles.btnContainer}>
                <button className={styles.addBtn}><AddIcon /></button>
            </div>
        </>
    );
}