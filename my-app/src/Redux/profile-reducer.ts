import {ProfileActionsType} from "./state";
import {ThunkAction} from "redux-thunk";

import {profileAPI} from "../API/Api";

type ProfilePageStateType = {
    posts: PostsType[]
    newPostText: string
    profile: null
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
    photos: { small: string, large: string }
}

let initialState: ProfilePageStateType = {
    posts: [
        {id: 1, message: 'Hello samurai', likesCount: 712},
        {id: 2, message: 'How are you?', likesCount: 491},
        {id: 3, message: "I'm a ninja", likesCount: 31},
    ],
    newPostText: '',
    profile: null
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
