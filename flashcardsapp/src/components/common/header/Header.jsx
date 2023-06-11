import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import "@fontsource/genos/700.css";
import styles from './Header.module.scss';
import 'normalize.css';
import MobileHeader from './MobileHeader/MobileHeader';
import { ReactComponent as Userpic } from '../../../assets/img/HeaderIcon.svg';

export default function Header() {
  return (
    <>
      <MobileHeader />
      <header className={styles.mainContainer}>
        <div className={styles.container}>
          <Link to='/study-language-flashcards-app' className={styles.links}>
            <div className={styles.title}>IKNOWTHIS</div>
          </Link>
          <nav className={styles.navContainer}>
            <div className={styles.currentLanguage}>EN</div>
            <Link to='/study-language-flashcards-app' className={styles.links}>
              <HomeIcon sx={{ fontSize: 40 }} className={styles.homeBtn} />
            </Link>
            <Link to='/users' className={styles.links}>
              <Userpic className={styles.myaccount} alt='My account' />
            </Link>
          </nav>
        </div>
        <div className={styles.headerLine}></div>
      </header>
    </>
  );
}