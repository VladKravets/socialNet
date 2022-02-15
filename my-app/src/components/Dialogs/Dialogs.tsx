import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/MessageItem";


const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.messages.map(message => <MessageItem message={message.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>

    );
};

export default Dialogs;
