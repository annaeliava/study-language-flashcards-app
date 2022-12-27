import React from "react";
import styles from './Registration.module.scss';

export default function Registration() {
    return (
        <>
            <form>
                <div className="container">
                    <h1>Sign Up</h1>
                    <label for="email">Email</label>
                    <input type="text" placeholder="Enter Email" name="email" required />

                    <label for="psw">Password</label>
                    <input type="password" placeholder="Enter Password" name="psw" required />

                    <label for="psw-repeat">Repeat Password</label>
                    <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
                </div>
            </form>
        </>
    );
}