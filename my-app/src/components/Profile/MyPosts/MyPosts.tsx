import React from 'react';
import s from './MyPosts.module.css'
import Post from "./MyPost/Post";


const MyPosts = () => {
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
                <Post message={'Hello samurai'} likesCount={712}/>
                <Post message={'How are you'} likesCount={498}/>
                <Post message={'I\'m\ a ninja'} likesCount={4669}/>
            </div>
        </div>
    );
};

export default MyPosts;
