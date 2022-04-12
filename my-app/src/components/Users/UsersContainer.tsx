import {connect} from "react-redux";
import {RootStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setUsersAC,
    setCurrentPageAC,
    setUsersTotalCountAC,
    unfolllowAC,
    UsersType, setLoadingAC
} from "../../Redux/users-reducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";

type MapStateToPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
}

type MapStateToDispatchType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    setLoading:(isLoading:boolean)=>void

}
type UsersPropsType = {
    users: UsersType[]
    setUsers: (users: UsersType[]) => void
    unfollow: (userID: number) => void
    follow: (userID: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

export class UsersCont extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <Users
            users={this.props.users}
            onPageChanged={this.onPageChanged}
            setUsers={this.props.setUsers}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            setCurrentPage={this.props.setCurrentPage}
            setTotalUsersCount={this.props.setTotalUsersCount}/>

    }
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPageSize,
        isLoading: state.usersPage.isLoading
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
        setLoading:(isLoading:boolean)=>{
            dispatch(setLoadingAC(isLoading))
        }
    }
}


export default connect(mapStateToProps, mapStateToDispatch)(UsersCont)