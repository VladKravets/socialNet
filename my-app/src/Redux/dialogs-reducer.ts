import {ActionsType, DialogType, MessageType} from "./state";

type DialogsInitialState = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageBody: string
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
    ],
    newMessageBody: ''
}

export const dialogsReducer = (state = initialState, action: ActionsType) => {

    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.body
            break;
        case 'SEND_MESSAGE':
            let body = state.newMessageBody
            state.messages.push({id: 6, message: body})
            break;
        default:
            return state
    }

    return state
}
export const UpdateMessageBodyCreator = (body: string) => ({type: 'UPDATE-NEW-MESSAGE-BODY', body} as const)
export const SendMessageCreator = () => ({type: 'SEND_MESSAGE'} as const)
