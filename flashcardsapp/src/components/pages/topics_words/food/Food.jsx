import React, { useState } from "react";
import { Link } from 'react-router-dom';
import AddNewWord from "../../../common/table/addNewWord/addNewWord";
import Titles from "../../../common/table/firstLine/Titles";
import Words from "../../../common/table/words/Words";
import styles from "../Topics.module.scss";
import food_data from "./food-topic_data";

export default function Food() {
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
                <div className={styles.title}>Food</div>
                <div className={styles.mainContainer}>
                    <Titles />
                    {food_data.map(table => <Words data={table} key={table.id} />)}
                    <AddNewWord handleNewWord={handleNewWord} />
                    {newWord ? <div>hello</div> : ''}
                    <div className={styles.gameBtnContainer}>
                        <Link to='/food_game' className={styles.link}>
                            <button className={styles.gameBtn}>practice</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}