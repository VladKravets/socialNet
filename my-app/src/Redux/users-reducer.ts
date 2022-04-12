export type PhotosType = {
    small: string
    large: string
}
export type UserLocationType = {
    city: string
    country: string
}
export type FollowUserActionType = {
    type: 'FOLLOW'
    userID: number
}
export type UnfollowUserActionType = {
    type: 'UNFOLLOW'
    userID: number
}
export type SetUsersActionType = {
    type: 'SET-USERS'
    users: UsersType[]
}
export type SetCurrentPageActionType = {
    type: 'SET-CURRENT-PAGE'
    currentPage: number
}
export type SetUserTotalCountActionType = {
    type: 'SET-USERS-TOTAL-COUNT',
    totalUsersCount: number
}
export type SetIsLoadingActionType = {
    type: 'SET-LOADING',
    isLoading: boolean
}

export type UsersReducerType =
    FollowUserActionType
    | UnfollowUserActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetUserTotalCountActionType
    | SetIsLoadingActionType
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
    pageSize: number
    totalUsersCount: number
    currentPageSize: number
    isLoading:boolean
}

let initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPageSize: 5,
    isLoading:false,
}

export const usersReducer = (state = initialState, action: UsersReducerType): UsersPageType => {
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
            return {...state, users: action.users}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPageSize: action.currentPage}
        case 'SET-USERS-TOTAL-COUNT':
            return {...state, totalUsersCount: action.totalUsersCount}
        case 'SET-LOADING':
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}


export const followAC = (userID: number) => ({type: "FOLLOW", userID})
export const unfolllowAC = (userID: number) => ({type: 'UNFOLLOW', userID})
export const setUsersAC = (users: UsersType[]) => ({type: 'SET-USERS', users})
export const setCurrentPageAC = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage})
export const setUsersTotalCountAC = (totalUsersCount: number) => ({type: 'SET-USERS-TOTAL-COUNT', totalUsersCount})
export const setLoadingAC = (isLoading: boolean) => ({type: 'SET-LOADING', isLoading})
