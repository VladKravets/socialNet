import React, {ChangeEvent} from 'react';
import {ActionsType, DialogsPageType,} from "../../Redux/state";
import {SendMessageCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";

type DialogsPagePropsType = DialogsPageType & {
    dispatch: (action: ActionsType) => void
}

const DialogsContainer = (props: DialogsPagePropsType) => {
    let state = props.store.getState().dialogsPage

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // let body = e.target.value
        props.dispatch({type: 'UPDATE-NEW-MESSAGE-BODY', body})
    }
    const onSendMessageClick = (body) => {
        props.dispatch(SendMessageCreator(body))
    }
    return (
        <Dialogs newMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>
    );
};

export default DialogsContainer;
