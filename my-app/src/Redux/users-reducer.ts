import {usersAPI} from "../API/Api";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";

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
export type ToogleInFollowingProgress = {
    type: 'TOGGLE-IN_FOLLOWING-PROCESS',
    followingInProgress: [],
    userId: number
    isFetching: boolean
}
export type UsersReducerActionsType =
    FollowUserActionType |
    UnfollowUserActionType |
    SetUsersActionType |
    SetCurrentPageActionType |
    SetUserTotalCountActionType |
    SetIsLoadingActionType |
    ToogleInFollowingProgress


export type UsersType = {
    id: number
    photos: PhotosType
    followed: boolean
    name: string
    status: string
    location: UserLocationType
}

export type UsersPageStateType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPageSize: number
    isLoading: boolean
    followingInProgress: Array<number>
}

let initialState: UsersPageStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPageSize: 1,
    isLoading: false,
    followingInProgress: []
}

export const usersReducer = (state = initialState, action: UsersReducerActionsType): UsersPageStateType => {
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
        case 'TOGGLE-IN_FOLLOWING-PROCESS':
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(el => el !== action.userId)
            }
        default:
            return state
    }
}


export const followSuccess = (userID: number) => ({type: "FOLLOW", userID})
export const unfollowSuccess = (userID: number) => ({type: 'UNFOLLOW', userID})
export const setUsers = (users: UsersType[]) => ({type: 'SET-USERS', users})
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage})
export const setTotalUsersCount = (totalUsersCount: number) => ({type: 'SET-USERS-TOTAL-COUNT', totalUsersCount})
export const setLoading = (isLoading: boolean) => ({type: 'SET-LOADING', isLoading})
export const setToggleFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: 'TOGGLE-IN_FOLLOWING-PROCESS',
    isFetching,
    userId
} as const)


//ThunkCreators

export type ThunkUsersType = ThunkAction<void, UsersPageStateType, unknown, UsersReducerActionsType>

export const getUsersThunkCreator = (currentPage: number, pageSize: number): ThunkUsersType => {
    return (dispatch: Dispatch) => {
        dispatch(setCurrentPage(currentPage))
        dispatch(setLoading(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then((data) => {
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
                dispatch(setLoading(false))
            })
    }
}

export const follow = (userId:number): ThunkUsersType => {
    return (dispatch: Dispatch) => {
        dispatch(setToggleFollowingProgress(true,userId))
        usersAPI.postUsers(userId)
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(setToggleFollowingProgress(false,userId))
            })
    }
}
export const unfollow = (userId:number): ThunkUsersType => {
    return (dispatch: Dispatch) => {
        dispatch(setToggleFollowingProgress(true,userId))
        usersAPI.deleteUsers(userId)
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(setToggleFollowingProgress(false,userId))
            })
    }
}