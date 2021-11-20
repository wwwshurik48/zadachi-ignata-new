import React from 'react'
import Message from "./Message";
import styles from "./Message.module.css";
import {AlternativeMessage} from "./AlternativeMessage";


const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Alexandr',
    message: 'Hi, bro!!!',
    time: '22:00',
}

function HW1() {


    return (
        <div>
            <hr/>
            homeworks 1


            <Message

                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            <AlternativeMessage/>
        </div>
    )
}

export default HW1
