import React from 'react'
import styles from "./Message.module.css";


export const AlternativeMessage = () => {

    const onTextChange = () => {
        console.log("new message")
    }
    const onClickButton = () => {
        console.log("click button")
    }

    return (
        <div>
            <div className={styles.newMessageBox}>
                <div>
                    <textarea onChange={onTextChange}></textarea>
                </div>
                <div>
                    <button onClick={onClickButton}>Add post</button>
                </div>
            </div>
        </div>
    )
}