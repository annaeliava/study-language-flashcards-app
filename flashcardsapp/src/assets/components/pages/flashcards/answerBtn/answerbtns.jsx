import React from 'react';
import styles from './AnswerBtn.module.scss';

export default function Answer(props) {
    return (
        <>
            <button className={styles.button} style={{ backgroundColor: '#' + props.background, borderColor: '#' + props.background, }}>
                <img className={styles.img} src={props.icon} alt='Answer' />
            </button>
        </>
    );
}