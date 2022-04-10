import {connect} from "react-redux";
import {Users} from "./Users";
import {RootStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setUsersAC,
    setCurrentPageAC,
    setUsersTotalCountAC,
    unfolllowAC,
    UsersType
} from "../../Redux/users-reducer";

type MapStateToPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

type MapStateToDispatchType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPageSize,
    }
}
let mapStateToDispatch = (dispatch: Dispatch): MapStateToDispatchType => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID) => {
            dispatch(unfolllowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setUsersTotalCountAC(totalUsersCount))
        },
    }
}


export default connect(mapStateToProps, mapStateToDispatch)(Users)