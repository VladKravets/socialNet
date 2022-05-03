import {SendMessageCreator, UpdateMessageBodyCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {DialogsPageType} from "../../Redux/state";
import {compose, Dispatch} from "redux";
import {AppStateType} from "../../Redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStateToPropsType = {
    // newMessage: string
    dialogsPage: DialogsPageType
}
type MapDispatchToPropsType = {
    handlerChangeMessage: (body: string) => void
    sendMessage: () => void
}
let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
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


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
