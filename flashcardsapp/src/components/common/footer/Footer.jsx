import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import 'normalize.css';

function Footer() {
    return (
        <>
            <footer>
                <nav className={styles.container}>
                    <Link to='/study-language-flashcards-app' className={styles.homeLink} style={{ textDecoration: 'none' }}>home</Link>
                    <Link to='/study-language-flashcards-app/about' className={styles.aboutlink} style={{ textDecoration: 'none' }}>about</Link>
                    <Link to='/study-language-flashcards-app/contacts' className={styles.contactsLink} style={{ textDecoration: 'none' }}>contacts</Link>
                </nav>
            </footer>
        </>
    );
}

export default Footer;