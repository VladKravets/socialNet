import {DialogType, MessageType} from "./state";
import {ProfileActionsType} from "./profile-reducer";

type DialogsInitialState = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
}
let initialState: DialogsInitialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: "'I'm great"},
        {id: 4, message: 'Hello everyone'},
        {id: 5, message: 'I ♥ you'},
        {id: 6, message: 'Where are you?'},
    ],
    dialogs: [
        {id: 1, name: 'Vlad'},
        {id: 2, name: 'Natasha'},
        {id: 3, name: 'Yuliana'},
        {id: 4, name: 'Svetlana'},
        {id: 5, name: 'Alex'},
        {id: 6, name: 'Mihail'},
    ]
}

export const dialogsReducer = (state = initialState, action: ProfileActionsType) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            return {
                ...state,
            }
        case 'SEND_MESSAGE':

            return {
                ...state,
                messages: [...state.messages, {id: 7}]
            }
        default:
            return state
    }
}
export const UpdateMessageBodyCreator = (body: string) => ({type: 'UPDATE-NEW-MESSAGE-BODY', body} as const)
export const SendMessageCreator = () => ({type: 'SEND_MESSAGE'} as const)
