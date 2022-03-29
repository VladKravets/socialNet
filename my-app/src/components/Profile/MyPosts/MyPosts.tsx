import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./MyPost/Post";
import {PostType} from "../../../Redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: (value: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const postsElements = props.posts.map(post => <Post key={post.id} id={post.id} message={post.message}
                                                        likesCount={post.likesCount}/>)
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }
    const addPost = () => {
        props.addPost(props.newPostText)
        // props.updateNewPostText('')
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
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
