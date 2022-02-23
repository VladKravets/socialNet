import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType, ProfilePageType} from "../../Redux/state";


type ProfilePropsType={
    posts: Array<PostType>
    addPost: (postMessage: string) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.posts} name={'My Posts'} addPost={props.addPost}/>
        </div>
    );
};

export default Profile;
