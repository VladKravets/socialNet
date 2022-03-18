export type StoreType = {
    _state: RootStateType
    rerenderEntireTree: () => void
    subscribe: (callback: () => void) => void
    _rerenderEntireTree: () => void
    getState: () => RootStateType
    dispatch: (action: AddPostActionType | ChangeNewTextActionType|UpdateMessageBodyActionType|SendMessageActionType) => void
}
export type AddPostActionType = {
    type: "ADD_POST"
    postMessage: string
}
export type ChangeNewTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export type UpdateMessageBodyActionType={
    type:'UPDATE-NEW-MESSAGE-BODY'
    body:string

}
export type SendMessageActionType={
    type:'SEND_MESSAGE'
}
export type ActionsType =
    ReturnType<typeof AddPostAcc>
    | ReturnType<typeof ChangeNewTextAcc>
    | ReturnType<typeof UpdateMessageBodyCreator>
    | ReturnType<typeof SendMessageCreator>


export const AddPostAcc = (postMessage: string) => {
    return {
        type: "ADD_POST",
        postMessage: postMessage
    } as const
}
export const ChangeNewTextAcc = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}
export const UpdateMessageBodyCreator = (body: string) => {
    return {
        type: 'UPDATE_NEW_MESSAGE_BODY',
        body: body
    } as const
}
export const SendMessageCreator = () => {
    return {
        type: 'SEND_MESSAGE',
    } as const
}
const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello samurai', likesCount: 712},
                {id: 2, message: 'How are you?', likesCount: 491},
                {id: 3, message: "I'm a ninja", likesCount: 31},
            ],
            newPostText: ''
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message:"'I'm great"},
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
        },
    },
    rerenderEntireTree() {
        console.log('Hello')
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer

    },
    _rerenderEntireTree() {
        console.log('Hello')
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === 'ADD_POST') {
            const newPost: PostType = {
                id: 5,
                message: action.postMessage,
                likesCount: 3
            }
            this._state.profilePage.posts.push(newPost)
            this._rerenderEntireTree()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._rerenderEntireTree()
        } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
            this._state.dialogsPage.newMessageBody = action.body
            this._rerenderEntireTree()
        } else if (action.type === 'SEND_MESSAGE') {
            let body = this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push({id: 6, message: body})
            this._rerenderEntireTree()
        }
    }
}


export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    newPostText: string
    posts: Array<PostType>

}
export type DialogsPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageBody: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello samurai', likesCount: 712},
            {id: 2, message: 'How are you?', likesCount: 491},
            {id: 3, message: 'I\'m\ a ninja', likesCount: 31},
        ],
        newPostText: ''
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'I\'m\ great'},
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
    },
}


export default store
