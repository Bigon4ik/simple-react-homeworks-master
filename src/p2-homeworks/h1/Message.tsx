import React from 'react'
import style from './Message.module.css'

export type messageDataPropsType={
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: messageDataPropsType) {
    return (
        <div className={style.message}>
            <div>
                <img src={props.avatar}/>
            </div>
            <div>{props.message}</div>
            <div>{props.name}</div>
            <div>{props.time}</div>


        </div>
    )
}

export default Message
