import React, { useState } from "react";
import AddNewWord from "../../../common/table/addNewWord/addNewWord";
import Titles from "../../../common/table/firstLine/Titles";
import New from "../../../common/table/newWord/New";
import Words from "../../../common/table/words/Words";
import styles from "../Topics.module.scss";
import clothes_data from "./clothes-topic_data";

export default function Clothes() {
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
                <div className={styles.title}>Clothes</div>
                <div className={styles.mainContainer}>
                    <Titles />
                    {clothes_data.map(table => <Words data={table} />)}
                    <AddNewWord handleNewWord={handleNewWord} />
                    {newWord ? <New saveNewWord={saveNewWord} /> : ''}
                </div>
            </div>
        </>
    );
}