import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/state";


const Profile = (props: ProfilePageType) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.posts} name={'My Posts'}/>
        </div>
    );
};

export default Profile;
