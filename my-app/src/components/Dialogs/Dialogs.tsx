import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/MessageItem";
import {
    AddPostActionType, ChangeNewTextActionType,
    DialogsPageType, SendMessageActionType,
    SendMessageCreator, UpdateMessageBodyActionType,
    UpdateMessageBodyCreator
} from "../../Redux/state";
import {brotliDecompress} from "zlib";

type DialogsPagePropsType = DialogsPageType & {
    dispatch: (action: AddPostActionType | ChangeNewTextActionType | UpdateMessageBodyActionType | SendMessageActionType) => void
}

const Dialogs = (props: DialogsPagePropsType) => {
    let dialogsElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let newMessageBody = props.newMessageBody
    let messagesElements = props.messages.map(message => <MessageItem id={message.id} message={message.message}/>)
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.dispatch({type: 'UPDATE-NEW-MESSAGE-BODY', body})
    }
    const onSendMessageClick = () => {
        props.dispatch(SendMessageCreator())
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
                        <textarea value={newMessageBody}
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
