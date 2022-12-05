import React from "react";
import Add from "../../../common/table/addBtn/addBtn";
import Titles from "../../../common/table/firstLine/Titles";
import Words from "../../../common/table/words/Words";
import styles from "../Topics.module.scss";
import verbs_data from "./verbs-topic_data";

export default function Verbs() {
    return (
        <>
            <div>
                <div className={styles.title}>Verbs</div>
                <div className={styles.mainContainer}>
                    <Titles />
                    {verbs_data.map(table => <Words data={table} />)}
                    <Add />
                </div>
            </div>
        </>
    );
}