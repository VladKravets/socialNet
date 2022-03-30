import {ActionsType} from "./state";

export type UsersType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: { city: string, country: string }
}

export type UsersPageType = {
    users: UsersType[]
}

let initialState: UsersPageType = {
    users: [
        {
            id: 1,
            followed: true,
            fullName: 'Vlad',
            status: 'I am a samurai',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            followed: true,
            fullName: 'Natasha',
            status: 'I am a teacher',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 3,
            followed: false,
            fullName: 'Ritis',
            status: 'I am a entrepreneur',
            location: {city: 'Vilnus', country: 'Litva'}
        },
        {
            id: 4,
            followed: false,
            fullName: 'John',
            status: 'I am a NBA-player',
            location: {city: 'Vancuver', country: 'Canada'}
        },

    ],
}

export const usersReducer = (state = initialState, action: ActionsType) => {
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
            return {...state, users: [...state.users,...action.users]}
        default:
            return state
    }
}


export const followAC = () => ({type: "FOLLOW", userID})
export const unfolllowAC = () => ({type: 'UNFOLLOW', userID})
export const setUsersAC = () => ({type: 'SET-USERS', users})
