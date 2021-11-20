import React from 'react'
import styles from './Message.module.css'

export type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: PropsType) {

    return (
        <div>
            <div className={styles.routBox}>
                <img className={styles.avatar} src={props.avatar} alt="img"/>
                <div className={styles.messageBox}>
                    <p className={styles.name}>{props.name}</p>
                    <p className={styles.message}>{props.message}</p>
                    <p className={styles.time}>{props.time}</p>
                </div>
            </div>
        </div>
    )
}

export default Message
