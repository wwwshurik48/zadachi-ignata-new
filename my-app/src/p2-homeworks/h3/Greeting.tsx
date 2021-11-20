import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import {inspect} from "util";


type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, onEnter, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = s.error ? s.errorInput : s.input // need to fix with (?:)

    return (
        <div className={s.greeting}>
            <div>
                <input
                    value={name}
                    onChange={setNameCallback}
                    className={inputClass}
                />
                <div className={s.error}>{error}</div>

            </div>
            <button onClick={addUser} className={s.button} disabled={!name}>add</button>
            <div className={s.count}>{totalUsers}</div>

        </div>
    )
}

export default Greeting
