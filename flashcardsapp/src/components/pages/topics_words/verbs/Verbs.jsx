import React, { useState } from "react";
import { Link } from 'react-router-dom';
import AddNewWord from "../../../common/table/addNewWord/addNewWord";
import Titles from "../../../common/table/firstLine/Titles";
import Words from "../../../common/table/words/Words";
import styles from "../Topics.module.scss";
import verbs_data from "./verbs-topic_data";

export default function Verbs() {
    const [newWord, setNewWord] = useState(false);
    //shows form for new word
    const handleNewWord = () => {
        setNewWord(true);
    };
    //hides form 
    const saveNewWord = () => {
        setNewWord(false);
    };

    return (
        <>
            <div>
                <div className={styles.title}>Verbs</div>
                <div className={styles.mainContainer}>
                    <Titles />
                    {verbs_data.map(table => <Words data={table} key={table.id} />)}
                    <AddNewWord handleNewWord={handleNewWord} />
                    {newWord ? console.log('hi') : ''}
                    <div className={styles.gameBtnContainer}>
                        <Link to='/verbs_game' className={styles.link}>
                            <button className={styles.gameBtn}>practice</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}