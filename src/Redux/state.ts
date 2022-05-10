import {ProfileActionsType,} from "./profile-reducer";

// export type StoreType =Store & ReturnType<typeof reducers>


export type StoreType = {
    _state: RootStateType
    rerenderEntireTree: () => void
    subscribe: (callback: () => void) => void
    _rerenderEntireTree: (_state: {}) => void
    getState: () => RootStateType
    dispatch: (action: ProfileActionsType) => void
}






// @ts-ignore
const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello samurai', likesCount: 712},
                {id: 2, message: 'How are you?', likesCount: 491},
                {id: 3, message: "I'm a ninja", likesCount: 31},
            ],
            newPostText: '',
            profile:null
        },
        dialogsPage: {
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
    // dispatch(action) {
    //     this._state.profilePage = profileReducer(this._state.profilePage, action)
    //     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    //     this._rerenderEntireTree(this._state)
    // }
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
    profile:null

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
        newPostText: '',
        profile:null
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