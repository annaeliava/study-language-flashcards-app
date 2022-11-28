import React from "react";
import styles from "./Error.module.scss";
import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.errorTitle}>Страница не найдена</div>
                <Link to='/' style={{ textDecoration: 'nonr' }}>
                    <div className={styles.btnContainer}>
                        <button className={styles.button}>HOME</button>
                    </div>
                </Link>
            </div>
        </>
    );
}