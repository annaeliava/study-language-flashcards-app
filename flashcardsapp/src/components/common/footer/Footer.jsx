import React from 'react';
import styles from './Footer.module.scss';
import 'normalize.css';

function Footer() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.homeLink}>home</div>
                <div className={styles.myaccountLink}>account</div>
                <div className={styles.aboutlink}>about</div>
                <div className={styles.contactsLink}>contacts</div>
            </div>
        </>
    );
}

export default Footer;