import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, StoreType} from "../../Redux/state";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


export type ProfilePropsType = {
    dispatch: (action: ActionsType) => void
    store: StoreType

}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
};

export default Profile;
