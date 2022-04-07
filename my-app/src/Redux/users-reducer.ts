import {ActionsType} from "./state";

export type PhotosType = {
    small: string
    large: string
}
export type UserLocationType = {
    city: string
    country: string
}
export type UsersType = {
    id: number
    photos: PhotosType
    followed: boolean
    name: string
    status: string
    location: UserLocationType
}

export type UsersPageType = {
    users: UsersType[]
}

let initialState: UsersPageType = {
    users: [],
}

export const usersReducer = (state = initialState, action: ActionsType): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return {...user, followed: true}
                    }
                    return {...user}
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return {...user, followed: false}
                    }
                    return {...user}
                })
            }
        case 'SET-USERS':
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}


export const followAC = (userID: number) => ({type: "FOLLOW", userID})
export const unfolllowAC = (userID: number) => ({type: 'UNFOLLOW', userID})
export const setUsersAC = (users: UsersType[]) => ({type: 'SET-USERS', users})
