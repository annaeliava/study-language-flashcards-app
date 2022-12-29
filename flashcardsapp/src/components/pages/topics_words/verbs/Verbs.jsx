import React from "react";
import { Link } from 'react-router-dom';
import Titles from "../../../common/table/firstLine/Titles";
import Words from "../../../common/table/words/Words";
import styles from "../Topics.module.scss";
import verbs_data from "./verbs-topic_data";
import ExtensionIcon from '@mui/icons-material/Extension';

export default function Verbs() {
    return (
        <>
            <div>
                <div className={styles.title}>Verbs</div>
                <div className={styles.mainContainer}>
                    <Titles />
                    {verbs_data.map(table => <Words data={table} key={table.id} />)}
                    <div className={styles.gameBtnContainer}>
                        <Link to='/verbs_game' className={styles.link}>
                            <button className={styles.gameBtn}><ExtensionIcon /></button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}