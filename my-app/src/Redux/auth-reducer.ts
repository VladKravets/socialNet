export const SET_USER_DATA = 'SET-USER-DATA';

export type AuthDataType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

// export type AuthResponseType = {
//     resultCode: number
//     messages: Array<string>
//     data: {
//         id: number
//         email: string
//         login: string
//     }
// }

const initialUsers: AuthDataType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = initialUsers, action: AuthReducerActionType): AuthDataType => {
    switch (action.type) {
        case SET_USER_DATA:
            return ({
                ...state,
                ...action.data,
                isAuth: true
            })
        default:
            return state;
    }
}
export type AuthReducerActionType = ReturnType<typeof setUserDataAC>

export const setUserDataAC = (userId: number, email: string, login: string) => ({
    type: SET_USER_DATA,
    data: {userId, email, login}
} as const);


