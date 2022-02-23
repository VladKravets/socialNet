import React from 'react';
import s from './MyPosts.module.css'
import Post from "./MyPost/Post";
import {PostType, ProfilePageType} from "../../../Redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>
    name: string
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElements = props.posts.map(post => <Post id={post.id} message={post.message}
                                                      likesCount={post.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
        let text = alert(newPostElement.current && newPostElement.current.value)
    }

    return (
        <div className={s.postsBlock}>
            <h3>{props.name}</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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
