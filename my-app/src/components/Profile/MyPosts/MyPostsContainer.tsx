import React from 'react';
import {PostType, RootStateType, state} from "../../../Redux/state";
import {AddPostActionCreator, ChangeNewTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type  mapStateToPropsType={
    posts:Array<PostType>
    newPostText:string
}
type mapDispatchToPropsType={
    updateNewPostText:(text: string)=>void
    addPost:(value:string)=>void
}

const mapStateToProps = (state:RootStateType):mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
    return {
        updateNewPostText: (text: string) => {
            let action = ChangeNewTextActionCreator(text)
            dispatch(action)
        },
        addPost: (newPostText: string) => {
            dispatch(AddPostActionCreator(newPostText))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
