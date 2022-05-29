import {sendMessageAC} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {DialogsPageType} from "../../Redux/dialogs-reducer";
import {compose, Dispatch} from "redux";
import {RootStateType} from "../../Redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import React from "react";

type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}
type MapDispatchToPropsType = {
    sendMessage: (newMessage: string) => void
}
let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessage: (newDialogsText: string) => {
            dispatch(sendMessageAC(newDialogsText))
        }
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
