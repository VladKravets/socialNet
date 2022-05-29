import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/MessageItem";
import {DialogsPageType} from "../../Redux/state";
import AddMessageForm from "./Message/AddMessageForm";


type DialogsPropsProps = {
    dialogsPage: DialogsPageType
    handlerChangeMessage: (body: string) => void
    sendMessage: (values:string) => void
    isAuth: boolean
}

const Dialogs = (props: DialogsPropsProps) => {

    let dialogsElements = props.dialogsPage.dialogs
        .map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)
    let newMessageBody = props.dialogsPage.newMessageBody
    let messagesElements = props.dialogsPage.messages
        .map(message => <MessageItem key={message.id} id={message.id} message={message.message}/>)

   const addNewMessage=(values:any)=>{
        props.sendMessage(values.newMessageBody)
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
                            onChange={addNewMessage}
                            placeholder={'enter your message....'}/>
                    </div>
                    <div>
                       <AddMessageForm sendMessage={addNewMessage}/>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Dialogs;
