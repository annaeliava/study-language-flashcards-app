import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styles from "../Topics.module.scss";
import Words from "../../../common/table/words/Words";
import basic_data from "./basic-topic_data";
import Titles from "../../../common/table/firstLine/Titles";
import New from "../../../common/table/newWord/New";
import AddNewWord from "../../../common/table/addNewWord/addNewWord";

export default function Basic() {
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
                <div className={styles.title}>Basic</div>
                <div className={styles.mainContainer}>
                    <Titles />
                    {basic_data.map(table => <Words data={table} />)}
                    <AddNewWord handleNewWord={handleNewWord} />
                    {newWord ? <New saveNewWord={saveNewWord} /> : ''}
                    <div className={styles.gameBtnContainer}>
                        <Link to='/basic_game' className={styles.link}>
                            <button className={styles.gameBtn}>practice</button>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    );
}