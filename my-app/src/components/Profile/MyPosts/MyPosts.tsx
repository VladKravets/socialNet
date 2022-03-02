import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./MyPost/Post";
import {PostType, ProfilePageType} from "../../../Redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>
    name: string
    addPost: (postMessage: string) => void
    changePostCallback: (newText: string) => void
    newPostText: string
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const postsElements = props.posts.map(post => <Post id={post.id} message={post.message}
                                                        likesCount={post.likesCount}/>)

    const addPost = () => {
        props.addPost(props.newPostText)
        props.changePostCallback('')
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changePostCallback(e.currentTarget.value)
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
