import React from "react";
import Add from "../../../common/table/addBtn/addBtn";
import Titles from "../../../common/table/firstLine/Titles";
import Words from "../../../common/table/words/Words";
import styles from "../Topics.module.scss";
import food_data from "./food-topic_data";

export default function Food() {
    return (
        <>
            <div>
                <div className={styles.title}>Food</div>
                <div className={styles.mainContainer}>
                    <Titles />
                    {food_data.map(table => <Words data={table} />)}
                    <Add />
                </div>
            </div>
        </>
    );
}