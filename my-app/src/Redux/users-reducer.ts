import {ActionsType} from "./state";

export type UsersType = {
    id: number
    photoUrl: string
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
            photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Vlad_Tepes_002.jpg/1200px-Vlad_Tepes_002.jpg',
            followed: true,
            fullName: 'Vlad',
            status: 'I am a samurai',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Vlad_Tepes_002.jpg/1200px-Vlad_Tepes_002.jpg',
            followed: true,
            fullName: 'Natasha',
            status: 'I am a teacher',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 3,
            photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Vlad_Tepes_002.jpg/1200px-Vlad_Tepes_002.jpg',
            followed: false,
            fullName: 'Eduard',
            status: 'I am a entrepreneur',
            location: {city: 'Vilnius', country: 'Lithuania'}
        },
        {
            id: 4,
            photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Vlad_Tepes_002.jpg/1200px-Vlad_Tepes_002.jpg',
            followed: false,
            fullName: 'John',
            status: 'I am a NBA-player',
            location: {city: 'Vancouver', country: 'Canada'}
        },

    ],
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
