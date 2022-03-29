import {PostType, RootStateType} from "../../../Redux/state";
import {AddPostActionCreator, ChangeNewTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type  MapStateToPropsType={
    posts:Array<PostType>
    newPostText:string
}
type MapDispatchToPropsType={
    updateNewPostText:(text: string)=>void
    addPost:(value:string)=>void
}

const mapStateToProps = (state:RootStateType):MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(ChangeNewTextActionCreator(text))
        },
        addPost: (newPostText: string) => {
            dispatch(AddPostActionCreator(newPostText))
        }


    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
