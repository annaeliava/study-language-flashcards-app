import React, { useState } from "react";
import styles from "./Login.module.scss"

export default function Login() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeLogin = (e) => {
        setLogin(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.inputContainer}>
                    <input type="text" placeholder="login" name="login" id="login" className={styles.inputLogin} value={login} onChange={handleChangeLogin} />
                    <input type="password" placeholder="password" name="password" id="password" className={styles.inputPassword} value={password} onChange={handleChangePassword} />
                </div>
                <button className={styles.btnLogin}>login</button>
            </div>
        </>
    );
}