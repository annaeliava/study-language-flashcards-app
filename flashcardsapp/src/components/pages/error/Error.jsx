import React from "react";
import styles from "./Error.module.scss";
import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.errorTitle}>Oops!</div>
                <div className={styles.errorMessage}>We can't find the page that you're looking for :(</div>
                <Link to='/study-language-flashcards-app' className={styles.links}>
                    <div className={styles.btnContainer}>
                        <button className={styles.button}>back to home</button>
                    </div>
                </Link>
            </div>
        </>
    );
}
