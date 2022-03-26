import React, {ChangeEvent} from 'react';
import {ActionsType, DialogsPageType,} from "../../Redux/state";
import {SendMessageCreator, UpdateMessageBodyCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from '../../StoreContext';

type DialogsPagePropsType = DialogsPageType & {
    dispatch: (action: ActionsType) => void
}

const DialogsContainer = (props: DialogsPagePropsType) => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().dialogsPage

                const onNewMessageChange = (body:string) => {
                    store.dispatch(UpdateMessageBodyCreator(body))
                }
                const onSendMessageClick = (body: string) => {
                    store.dispatch(SendMessageCreator(body))
                }
                return <Dialogs newMessageBody={onNewMessageChange}
                                sendMessage={onSendMessageClick}
                                dialogsPage={state}/>
            }

            }
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;
