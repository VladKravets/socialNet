import {connect} from "react-redux";
import {RootStateType} from "../../Redux/redux-store";
import {
    follow,unfollow,
    setUsers, setCurrentPage, setTotalUsersCount,setLoading,
    UsersType,
} from "../../Redux/users-reducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {Prealoader} from "../../common/Prealoder/Prealoader";



export class UsersCont extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.setLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
                this.props.setLoading(false)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setLoading(false)
            })
    }

    render() {
        return <>
            {this.props.isLoading?<Prealoader/>:''}
            <Users
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                />
        </>
    }
}


export type MapStateToPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
}
export type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    setLoading: (isLoading: boolean) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPageSize,
        isLoading: state.usersPage.isLoading
    }
}
// let mapStateToDispatch = (dispatch: Dispatch): MapStateToDispatchType => {
//     return {
//         follow: (userID) => {
//             dispatch(followAC(userID))
//         },
//         unfollow: (userID) => {
//             dispatch(unfolllowAC(userID))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalUsersCount: (totalUsersCount: number) => {
//             dispatch(setUsersTotalCountAC(totalUsersCount))
//         },
//         setLoading: (isLoading: boolean) => {
//             dispatch(setLoadingAC(isLoading))
//         }
//     }
// }


export default connect(mapStateToProps,{follow,unfollow,setUsers,setCurrentPage,setTotalUsersCount,setLoading})(UsersCont)