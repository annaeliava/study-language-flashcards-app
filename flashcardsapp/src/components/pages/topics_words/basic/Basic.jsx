import React from "react";
import { Link } from 'react-router-dom';
import styles from "../Topics.module.scss";
import Words from "../../../common/table/words/Words";
import basic_data from "./basic-topic_data";
import Titles from "../../../common/table/firstLine/Titles";
import ExtensionIcon from '@mui/icons-material/Extension';

export default function Basic() {
    return (
        <>
            <div>
                <div className={styles.title}>Basic</div>
                <div className={styles.mainContainer}>
                    <Titles />
                    {basic_data.map(table => <Words data={table} key={table.id} />)}
                </div>
                <div className={styles.gameBtnContainer}>
                    <Link to='/study-language-flashcards-app/basic_game' className={styles.link}>
                        <button className={styles.gameBtn}><ExtensionIcon /></button>
                    </Link>
                </div>
            </div>
        </>
    );
}