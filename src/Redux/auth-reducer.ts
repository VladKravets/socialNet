import {authAPI} from "../API/Api";
import {ThunkAction} from "redux-thunk";
import {Dispatch} from "redux";

export const SET_USER_DATA = 'SET-USER-DATA';

export type AuthDataStateType = {
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

const initialUsers: AuthDataStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = initialUsers, action: AuthReducerActionType): AuthDataStateType => {
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
export type ThunkUsersType = ThunkAction<void, AuthDataStateType, unknown, AuthReducerActionType>

export const getAuthUserDataTC = (): ThunkUsersType => {
    return (dispatch: Dispatch) => {
        authAPI.authGet()
            .then((data) => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(setUserDataAC(id, email, login))
                }
            })
    }
}

