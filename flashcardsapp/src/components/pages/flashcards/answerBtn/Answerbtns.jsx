import React from 'react';
import styles from './AnswerBtn.module.scss';

export default function Answer(props) {
    const { data } = props;
    return (
        <>
            <button className={styles.button} style={{ backgroundColor: '#' + data.background, borderColor: '#' + data.background, }}>
                <img className={styles.img} src={data.icon} style={{ width: data.width + 'rem', height: data.height + 'rem', }} alt='Answer' />
            </button>
        </>
    );
}
