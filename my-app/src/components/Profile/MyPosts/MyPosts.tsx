import React from 'react';
import s from './MyPosts.module.css'
import Post from "./MyPost/Post";
import {ProfilePageType} from "../../../Redux/state";


const MyPosts = (props:ProfilePageType) => {

    let postsElements = props.posts.map(post => <Post id={post.id} message={post.message} likesCount={post.likesCount}/>)
    return (
        <div className={s.postsBlock}>
            <h3> My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
