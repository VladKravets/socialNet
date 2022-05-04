import {ThunkAction} from "redux-thunk";

import {profileAPI} from "../API/Api";

export type AddPostActionType = {
    type: "ADD_POST"
    postMessage: string
}
export type ChangeNewTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export type UpdateMessageBodyActionType = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    body: string
}
export type SendMessageActionType = {
    type: 'SEND_MESSAGE'
}
export type SetUserProfileType = {
    type: 'SET-USER-PROFILE',
    profile: null
}
export type SetUserStatus = {
    type: 'SET-STATUS',
    status: string
}
export type ProfileActionsType =
    AddPostActionType
    | ChangeNewTextActionType
    | UpdateMessageBodyActionType
    | SendMessageActionType
    | SetUserProfileType
    | SetUserStatus


type ProfilePageStateType = {
    posts: PostsType[]
    newPostText: string
    profile: null,
    status: string
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}
type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
export type ProfileResponseType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: { small: string, large: string}
}

let initialState: ProfilePageStateType = {
    posts: [
        {id: 1, message: 'Hello samurai', likesCount: 712},
        {id: 2, message: 'How are you?', likesCount: 491},
        {id: 3, message: "I'm a ninja", likesCount: 31},
    ],
    newPostText: '',
    profile: null,
    status: ''
}

export const profileReducer = (state = initialState, action: ProfileActionsType) => {
    switch (action.type) {
        case 'ADD_POST':
            const newPost = {
                id: 5,
                message: action.postMessage,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.newText
            }
        case 'SET-USER-PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        case 'SET-STATUS':
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}


export const AddPostActionCreator = (postMessage: string) => {
    return {
        type: "ADD_POST",
        postMessage: postMessage
    } as const
}
export const ChangeNewTextActionCreator = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}
export const setUserProfile = (profile: null) => {
    return {
        type: 'SET-USER-PROFILE',
        profile,
    } as const
}
export const setUserStatus = (status: string) => {
    return {
        type: 'SET-STATUS',
        status,
    } as const
}

//Thunk Creators
export type ThunkProfileType = ThunkAction<void, ProfilePageStateType, unknown, ProfileActionsType>
export const getUserProfileTC = (userId: number): ThunkProfileType => {
    return (dispatch) => {
        profileAPI.getShowProfile(userId)
            .then((data) => {
                dispatch(setUserProfile(data))
            })
    }
}
export const getUserStatusTC = (userId: number): ThunkProfileType => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then((data) => {
                dispatch(setUserStatus(data))
            })
    }
}
export const updateUserStatusTC = (status: string): ThunkProfileType => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then((data) => {
                if (data.resultCode === 0) {
                    debugger
                    dispatch(setUserStatus(data))
                }
            })
    }
}
