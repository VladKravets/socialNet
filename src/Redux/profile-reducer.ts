import {ThunkAction} from "redux-thunk";

import {profileAPI} from "../API/Api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

export type ProfilePageType = {
    posts: PostsType[]
    profile: ProfileResponseType | null
    status: string
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
export type PostsType = {
    id: number
    message: string
    likesCount: number
}

const initialProfile: ProfilePageType = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 34},
        {id: 2, message: "Need more time!!", likesCount: 135},
        {id: 3, message: "Great app", likesCount: 78},
        {id: 4, message: "It's my first post", likesCount: 14}
    ],
    profile: null,
    status: ''
}

export const profileReducer = (state: ProfilePageType = initialProfile, action: ProfilerActionsType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                message: action.postMessage,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost]};
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state;
    }
}
// ACTION TYPE
export type ProfilerActionsType = ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setStatusAC>


export const addPostAC = (postMessage: string) => ({type: ADD_POST, postMessage: postMessage} as const)
export const setUserProfileAC = (profile: ProfileResponseType) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatusAC = (status: string) => ({type: SET_STATUS, status} as const)

//Thunk Creators
export type ThunkProfileType = ThunkAction<void, ProfilePageType, unknown, ProfilerActionsType>
export const getUserProfileTC = (userId: number): ThunkProfileType => async dispatch => {
    const response = await profileAPI.getShowProfile(userId)
    dispatch(setUserProfileAC(response.data));
}
export const getUserStatusTC = (userId: number): ThunkProfileType => async dispatch => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatusAC(response.data));
}
export const updateUserStatusTC = (status: string): ThunkProfileType => async dispatch => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatusAC(status));
    }
}

