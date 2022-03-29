import React from 'react';
import {SendMessageCreator, UpdateMessageBodyCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {DialogsPageType, RootStateType} from "../../Redux/state";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    // newMessage: string
    dialogsPage: DialogsPageType
}
type MapDispatchToPropsType = {
    handlerChangeMessage: (body: string) => void
    sendMessage: () => void
}
let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        handlerChangeMessage: (body: string) => {
            dispatch(UpdateMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(SendMessageCreator())
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer;
