import {connect} from "react-redux";
import {RootStateType} from "../../Redux/redux-store";
import {
    unfollow, follow,
    setCurrentPage,
    UsersType, setToggleFollowingProgress, getUsersThunkCreator,
} from "../../Redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Prealoader} from "../../common/Prealoder/Prealoader";


export class UsersCont extends React.Component<UsersPropsType> {
    componentDidMount() {
        // this.props.setLoading(true)
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then((data) => {
        //         this.props.setUsers(data.items)
        //         this.props.setTotalUsersCount(data.totalCount)
        //         this.props.setLoading(false)
        //     })
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
        // this.props.setCurrentPage(pageNumber)
        // this.props.setLoading(true)
        // usersAPI.getUsers(pageNumber, this.props.pageSize)
        //     .then((data) => {
        //         this.props.setUsers(data.items)
        //         this.props.setLoading(false)
        //     })
    }

    render() {
        return <>
            {this.props.isLoading ? <Prealoader/> : ''}
            <Users
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                followingInProgress={this.props.followingInProgress}
                setToggleFollowingProgress={this.props.setToggleFollowingProgress}
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
    followingInProgress: Array<number>
}
export type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setCurrentPage: (currentPage: number) => void
    setToggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsersThunkCreator:(currentPage: number, pageSize: number) => void

}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPageSize,
        isLoading: state.usersPage.isLoading,
        followingInProgress: state.usersPage.followingInProgress
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


export default connect(mapStateToProps, {
    follow, unfollow,
    setCurrentPage,
    setToggleFollowingProgress,
    getUsersThunkCreator,

})(UsersCont)