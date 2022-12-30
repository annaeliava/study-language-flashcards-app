import React, { useState } from "react";
import styles from "../Table.module.scss";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DoneIcon from '@mui/icons-material/Done';
import CreateIcon from '@mui/icons-material/Create';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

export default function Words(props) {
    const { data, deleteWord, createOrUpdate, dictionary } = props;

    const [editMode, setEditMode] = useState(false);
    const [edit, setEdit] = useState(data);

    //shows edit buttons
    const handleEditTable = () => {
        setEditMode(true);
    };
    //hides edit buttons and saves changes
    const handleSaveEditing = (e) => {
        e.preventDefault();

        if (!edit.english.match(/[0 - 9]/) && !edit.russian.match(/[0 - 9]/) && edit.english !== '' && edit.russian !== '' && !edit.transcription.match(/[0 - 9]/)) {
            setEditMode(false);
            createOrUpdate(edit);
        } else {
            alert('please, type correctly');
        };
    };
    //editing
    const handleEditing = (e) => {
        setEdit({ ...edit, [e.target.dataset.name]: e.target.value });
    };

    return (
        <>
            <div className={styles.innerContainer}>
                <div className={styles.tableNumber}><CloudQueueIcon /></div>
                {editMode ?
                    <>
                        <input
                            type='text'
                            name='english'
                            className={`${styles.tableWord} ${styles.inputPadding}`}
                            data-name={'english'}
                            value={edit.english}
                            onChange={handleEditing} />
                        <input
                            type='text'
                            name='transcription'
                            className={`${styles.tableTranscription} ${styles.inputPadding}`}
                            data-name={'transcription'}
                            value={edit.transcription}
                            onChange={handleEditing} />
                        <input
                            type='text'
                            name='russian'
                            className={`${styles.tableTranslation} ${styles.inputPadding}`}
                            data-name={'russian'}
                            value={edit.russian}
                            onChange={handleEditing} />
                        <div className={styles.editBtnContainer}>
                            <button className={styles.deleteWordBtn} onClick={() => deleteWord(data.id)}><DeleteOutlineIcon /></button>
                            <button className={styles.saveEditBtn} onClick={handleSaveEditing}><DoneIcon /></button>
                        </div>
                    </>
                    :
                    <>
                        <div className={styles.tableWord}>{edit.english}</div>
                        <div className={styles.tableTranscription}>{edit.transcription}</div>
                        <div className={styles.tableTranslation}>{edit.russian}</div>
                        {
                            dictionary ?
                                <button className={styles.editTable} onClick={handleEditTable}>
                                    <CreateIcon />
                                </button>
                                :
                                ''
                        }
                    </>
                }
            </div>
        </>
    );
}