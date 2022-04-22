type ActionsTypeAuthUsers = InitialAuthStateType & {
    type: 'SET_AUTH_USERS'

}

export type InitialAuthStateType = {
    data: {
        id: number | null,
        email: string | null,
        login: string | null,
        isAuth: boolean,
    }
}
let initialState: InitialAuthStateType = {
    data: {
        id: null,
        email: null,
        login: null,
        isAuth: false,
    }
}

export const authReducer = (state = initialState, action: ActionsTypeAuthUsers): InitialAuthStateType => {
    switch (action.type) {
        case 'SET_AUTH_USERS':
            return {
                ...state,
                ...action.data
            }

        default:
            return state
    }
}


const setAuthUsersData = (id: number, email: string, login: string) => ({
    type: 'SET_AUTH_USERS',
    data: {id, email, login}
})
