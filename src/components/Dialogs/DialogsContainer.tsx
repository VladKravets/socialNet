import {SendMessageCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {DialogsPageType} from "../../Redux/state";
import {compose, Dispatch} from "redux";
import {AppStateType} from "../../Redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import React from "react";

type MapStateToPropsType = {
    // newMessage: string
    dialogsPage: DialogsPageType
}
type MapDispatchToPropsType = {
    sendMessage: () => void
}
let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessage: () => {
            dispatch(SendMessageCreator())
        }
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
