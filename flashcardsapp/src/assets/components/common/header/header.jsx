import React from 'react';
import styles from './Header.module.scss';
import 'normalize.css';

function Header() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>IKNOWTHIS</div>
                <div className={styles.currentLanguage}>EN</div>
                <img src='/flashcardsapp/src/assets/pics/header/header_home-icon.svg' alt='Home Icon' className={styles.homeBtn} />
                <img src="/flashcardsapp/src/assets/pics/common/userpic.svg" alt="Userpic" className={styles.myaccount} />
            </div>
            <div className={styles.headerLine}></div>
        </>
    );
}

export default Header;