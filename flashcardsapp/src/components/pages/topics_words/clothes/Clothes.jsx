import React from "react";
import Add from "../../../common/table/addBtn/addBtn";
import Titles from "../../../common/table/firstLine/Titles";
import Words from "../../../common/table/words/Words";
import styles from "../Topics.module.scss";
import clothes_data from "./clothes-topic_data";

export default function Clothes() {
    return (
        <>
            <div>
                <div className={styles.title}>Clothes</div>
                <div className={styles.mainContainer}>
                    <Titles />
                    {clothes_data.map(table => <Words data={table} />)}
                    <Add />
                </div>
            </div>
        </>
    );
}