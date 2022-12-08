import React from 'react';
import styles from './Sidebar.module.scss';
import { Link } from 'react-router-dom';

function Sidebar(props) {
    const { data } = props;
    return (
        <>
            <Link to={data.linkTo} className={styles.links}>
                <div className={styles.container}>
                    <div className={styles.imgContainer}>
                        <img src={data.pic} alt="sidebar" className={styles.pic} />
                    </div>
                    <div className={styles.title}>{data.sidebar}</div>
                </div>
            </Link>
        </>
    );
}

export default Sidebar;
