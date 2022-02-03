import React from 'react';
import s from './MyPosts.module.css'
import Post from "./MyPost/Post";


const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                New post
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
