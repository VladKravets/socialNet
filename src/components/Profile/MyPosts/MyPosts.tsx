import React from 'react';
import s from './MyPosts.module.css'
import Post from "./MyPost/Post";
import {PostType} from "../../../Redux/state";
import AddPostForm from "./AddNewPostForm";

type MyPostsPropsType = {
    posts: Array<PostType>
    onAddPost: (value: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const postsElements = props.posts.map(post => <Post key={post.id} id={post.id} message={post.message}
                                                        likesCount={post.likesCount}/>)
    let addPost = (newPost: string) => {
        props.onAddPost(newPost)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddPostForm addPost={addPost}/>
            <div className={s.posts}>{postsElements}</div>
        </div>
    );
}

export default MyPosts;
