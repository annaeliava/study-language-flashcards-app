import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import 'normalize.css';

function Footer() {
    return (
        <>
            <footer>
                <nav className={styles.container}>
                    <Link to='/' className={styles.homeLink} style={{ textDecoration: 'none' }}>home</Link>
                    <Link to='/users' className={styles.myaccountLink} style={{ textDecoration: 'none' }}>account</Link>
                    <Link to='/about' className={styles.aboutlink} style={{ textDecoration: 'none' }}>about</Link>
                    <Link to='/contacts' className={styles.contactsLink} style={{ textDecoration: 'none' }}>contacts</Link>
                </nav>
            </footer>
        </>
    );
}

export default Footer;