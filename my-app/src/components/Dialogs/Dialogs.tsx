import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/MessageItem";
import {DialogsPageType} from "../../Redux/state";


type DialogsPropsProps = {
    dialogsPage: DialogsPageType
    handeChangeMessage: (body:string) => void
    sendMessage: () => void
}

const Dialogs = (props: DialogsPropsProps) => {
    let state = props.dialogsPage

    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let newMessageBody = props.dialogsPage.newMessageBody
    let messagesElements = props.dialogsPage.messages.map(message => <MessageItem id={message.id} message={message.message}/>)


    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.handeChangeMessage(body)
        // props.dispatch({type: 'UPDATE-NEW-MESSAGE-BODY', body})
    }
    const onSendMessageClick = () => {
        props.sendMessage()
        // dispatch(SendMessageCreator())
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            value={newMessageBody}
                            onChange={onNewMessageChange}
                            placeholder={'enter your message....'}/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Dialogs;
