import React, { useState } from "react";
import styles from "../Table.module.scss";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DoneIcon from '@mui/icons-material/Done';
import CreateIcon from '@mui/icons-material/Create';

export default function Words(props) {
    const { data } = props;

    const [edit, setEdit] = useState(false);
    //shows edit buttons
    const handleEditTable = () => {
        setEdit(true);
    };
    //hides edit buttons
    const handleSaveEditing = () => {
        setEdit(false);
    };
    //you can type in input
    const [eng, setEng] = useState(data.english);
    const [transcrip, setTranscrip] = useState(data.transcription);
    const [rus, setRus] = useState(data.russian);

    const handleChangeEng = (e) => {
        setEng(e.target.value);
    };

    const handleChangeTranscrip = (e) => {
        setTranscrip(e.target.value);
    };

    const handleChangeRus = (e) => {
        setRus(e.target.value);
    };

    return (
        <>
            <div className={styles.innerContainer}>
                <div className={styles.tableNumber}>{data.id}</div>
                <input type='text' name='english' className={styles.tableWord} value={eng} onChange={handleChangeEng} />
                <input type='text' name='transcription' className={styles.tableTranscription} value={transcrip} onChange={handleChangeTranscrip} />
                <input type='text' name='russian' className={styles.tableTranslation} value={rus} onChange={handleChangeRus} />
                {edit ? <div className={styles.editBtnContainer}>
                    <button className={styles.deleteWordBtn}><DeleteOutlineIcon /></button>
                    <button className={styles.saveEditBtn} onClick={handleSaveEditing}><DoneIcon /></button>
                </div>
                    :
                    <button className={styles.editTable} onClick={handleEditTable}><CreateIcon /></button>
                }
            </div>
        </>
    );
}