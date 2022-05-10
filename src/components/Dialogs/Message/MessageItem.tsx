import React from 'react';
import s from '../Dialogs.module.css'
import {MessageType} from "../../../Redux/state";


type MessageItemPropsType = MessageType

const Message: React.FC<MessageItemPropsType> = (props) => {
    return <div className={s.message}>{props.message}</div>
}


export default Message;
