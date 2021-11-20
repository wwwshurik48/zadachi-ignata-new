import React from 'react'
import {AffairType} from "./HW2";
import styles from './Affairs.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix
    const priorityClass = styles.item + ' ' + styles[props.affair.priority]
    return (
        <div className={styles.affair}>
            <div className={styles.item}>{props.affair.name}</div>
            <div className={priorityClass}>[{props.affair.priority}]</div>
            <button onClick={deleteCallback} className={styles.item + ' ' + styles.button}>X</button>
        </div>
    )
}

export default Affair
