import React from "react";
import styles from "../Topics.module.scss";
import Words from "../../../common/table/words/Words";
import basic_data from "./basic-topic_data";
import Titles from "../../../common/table/firstLine/Titles";
import Add from "../../../common/table/addBtn/addBtn";

export default function Basic() {
    return (
        <>
            <div>
                <div className={styles.title}>Basic</div>
                <div className={styles.mainContainer}>
                    <Titles />
                    {basic_data.map(table => <Words data={table} />)}
                    <Add />
                </div>
            </div>
        </>
    );
}