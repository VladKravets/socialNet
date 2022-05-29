const SEND_MESSAGE = 'SEND-MESSAGE';

export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}
export type MessagesType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}

const initialDialogs: DialogsPageType = {
    dialogs: [
        {id: 1, name: 'Chris'},
        {id: 2, name: 'Kristen'},
        {id: 3, name: 'Victor'},
        {id: 4, name: 'Mary'},
        {id: 5, name: 'Zac'},
        {id: 6, name: 'Carey'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is it goin?'},
        {id: 3, message: 'Awesome!'}
    ]
}

export const dialogsReducer = (state = initialDialogs, action: DialogsReducerActionType):DialogsPageType => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {...state, messages: [...state.messages, {id: 4, message: action.newDialogsText}]};
        default:
            return state;
    }
}
// ACTION TYPE
export type DialogsReducerActionType = ReturnType<typeof sendMessageAC>;


export const sendMessageAC = (newDialogsText: string) => ({type: SEND_MESSAGE, newDialogsText} as const)

