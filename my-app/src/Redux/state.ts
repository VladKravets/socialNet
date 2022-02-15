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
    posts: Array<PostType>
    dialogs:Array<DialogType>
}
export type DialogsPageType = {
    messages: Array<MessageType>
}
export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello samurai', likesCount: 712},
            {id: 2, message: 'How are you?', likesCount: 491},
            {id: 2, message: 'I\'m\ a ninja', likesCount: 31},
        ],
        dialogs: [
            {id: 1, name: 'Vlad'},
            {id: 2, name: 'Natasha'},
            {id: 3, name: 'Yuliana'},
            {id: 4, name: 'Svetlana'},
            {id: 5, name: 'Alex'},
            {id: 6, name: 'Mihail'},
        ]
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
    },
    sidebar:{}
}
export default state
