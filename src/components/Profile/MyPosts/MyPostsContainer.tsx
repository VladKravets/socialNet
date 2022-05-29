import {PostType, RootStateType} from "../../../Redux/state";
import {addPostAC} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type  MapStateToPropsType = {
    posts: Array<PostType>
}
type MapDispatchToPropsType = {
    onAddPost: (value: string) => void
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onAddPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        }


    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
