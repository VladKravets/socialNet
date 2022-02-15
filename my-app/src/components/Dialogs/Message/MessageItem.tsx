import React from 'react';
import s from '../Dialogs.module.css'


type MessageItemPropsType = {
    message: string
}
const Message: React.FC<MessageItemPropsType> = (props) => {
    return <div className={s.message}>{props.message}</div>
}


export default Message;
