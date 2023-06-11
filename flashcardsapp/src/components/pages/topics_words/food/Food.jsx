import React from "react";
import { Link } from 'react-router-dom';
import Titles from "../../../common/table/firstLine/Titles";
import Words from "../../../common/table/words/Words";
import styles from "../Topics.module.scss";
import food_data from "./food-topic_data";
import ExtensionIcon from '@mui/icons-material/Extension';

export default function Food() {
    return (
        <>
            <div>
                <div className={styles.title}>Food</div>
                <div className={styles.mainContainer}>
                    <Titles />
                    {food_data.map(table => <Words data={table} key={table.id} />)}
                    <div className={styles.gameBtnContainer}>
                        <Link to='/study-language-flashcards-app/food_game' className={styles.link}>
                            <button className={styles.gameBtn}><ExtensionIcon /></button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}