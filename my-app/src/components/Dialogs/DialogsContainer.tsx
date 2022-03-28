import React, {ChangeEvent} from 'react';
import {ActionsType, DialogsPageType,} from "../../Redux/state";
import {SendMessageCreator, UpdateMessageBodyCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from '../../StoreContext';



const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().dialogsPage

                const onNewMessageChange = (body:string) => {
                    store.dispatch(UpdateMessageBodyCreator(body))
                }
                const onSendMessageClick = () => {
                    store.dispatch(SendMessageCreator())
                }
                return <Dialogs handeChangeMessage={onNewMessageChange}
                                sendMessage={onSendMessageClick}
                                dialogsPage={state}/>
            }

            }
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;
