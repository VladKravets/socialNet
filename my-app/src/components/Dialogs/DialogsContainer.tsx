import React from 'react';
import {SendMessageCreator, UpdateMessageBodyCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from '../../StoreContext';
import {connect} from "react-redux";


const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().dialogsPage

                const onNewMessageChange = (body: string) => {
                    store.dispatch(UpdateMessageBodyCreator(body))
                }
                const onSendMessageClick = () => {
                    store.dispatch(SendMessageCreator())
                }
                return <Dialogs handlerChangeMessage={onNewMessageChange}
                                sendMessage={onSendMessageClick}
                                dialogsPage={state}/>
            }

            }
        </StoreContext.Consumer>
    );
};
let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = () => {
    return {
        c: 3
    }
}
let SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer;
