import React from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileResponseType} from "../../Redux/profile-reducer";

export type ProfilePropsType = {
    profile: ProfileResponseType | null
    status:string
    updateStatus: (status:string)=>void
}


const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <div className={s.profile}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;
