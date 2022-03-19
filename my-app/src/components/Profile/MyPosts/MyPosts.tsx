import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./MyPost/Post";
import {
    AddPostActionType,
    ChangeNewTextActionType,
    PostType,
} from "../../../Redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>
    name: string
    dispatch: (action: AddPostActionType | ChangeNewTextActionType) => void
    newPostText: string
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const postsElements = props.posts.map(post => <Post id={post.id} message={post.message}
                                                        likesCount={post.likesCount}/>)

    const addPost = () => {
        // props.addPost(props.newPostText)
        props.dispatch({type: 'ADD_POST', postMessage: props.newPostText})
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: ''})
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // props.changePostCallback(e.currentTarget.value)'
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: (e.currentTarget.value)})
    }

    return (
        <div className={s.postsBlock}>
            <h3>{props.name}</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>

            <div className={s.posts}>{postsElements}</div>
        </div>
    );
}
export default MyPosts;
