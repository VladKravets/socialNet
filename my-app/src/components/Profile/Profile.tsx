import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {changePostCallback, PostType, ProfilePageType, state} from "../../Redux/state";


type ProfilePropsType = {
    addPost: (postMessage: string) => void
    message: string
    posts: Array<PostType>
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts newPostText={props.message}
                     posts={props.posts}
                     name={'My Posts'}
                     addPost={props.addPost}
                     changePostCallback={changePostCallback}/>
        </div>
    );
};

export default Profile;
