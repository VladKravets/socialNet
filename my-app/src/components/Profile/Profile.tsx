import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {

}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
};

export default Profile;
