import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import {inspect} from "util";
import styles from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    const cnAll = styles.button + ' ' + (props.filter === 'all' ? styles.active : '')
    const cnHigh = styles.button + ' ' + (props.filter === 'high' ? styles.active : '')
    const cnMiddle = styles.button + ' ' + (props.filter === 'middle' ? styles.active : '')
    const cnLow = styles.button + ' ' + (props.filter === 'low' ? styles.active : '')

    return (
        <div>

            {mappedAffairs}

            <button onClick={setAll} className={cnAll}>All</button>
            <button onClick={setHigh} className={cnHigh}>High</button>
            <button onClick={setMiddle} className={cnMiddle}>Middle</button>
            <button onClick={setLow} className={cnLow}>Low</button>
        </div>
    )
}

export default Affairs
