export const dialogsReducer=(state:,action)=>{

    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.body
            break;
        case 'SEND_MESSAGE':
            let body = state.newMessageBody = ''
            state.messages.push({id: 6, message: body})
            break;
        default:
            return state
    }

    return state

}
export const UpdateMessageBodyCreator = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: body
    } as const
}
export const SendMessageCreator = () => {
    return {
        type: 'SEND_MESSAGE',
    } as const
}