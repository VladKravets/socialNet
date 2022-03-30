import {connect} from "react-redux";
import {Users} from "./Users";
import {RootStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfolllowAC, UsersType} from "../../Redux/users-reducer";

type MapStateToPropsType={
    users:UsersType[]
}
type MapStateToDispatchType={
follow:(userID:number)=>void
unfollow:(userID:number)=>void
setUsers:(users:UsersType[])=>void
}

let mapStateToProps = (state: RootStateType):MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}
let mapStateToDispatch = (dispatch: Dispatch):MapStateToDispatchType => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID) => {
            dispatch(unfolllowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}


export default connect(mapStateToProps, mapStateToDispatch)(Users)