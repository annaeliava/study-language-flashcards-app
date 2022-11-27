import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import 'normalize.css';

function Footer() {
    return (
        <>
            <footer>
                <nav className={styles.container}>
                    <Link to='/' className={styles.homeLink}>home</Link>
                    <Link to='/users' className={styles.myaccountLink}>account</Link>
                    <Link to='/about' className={styles.aboutlink}>about</Link>
                    <Link to='/contacts' className={styles.contactsLink}>contacts</Link>
                </nav>
            </footer>
        </>
    );
}

export default Footer;