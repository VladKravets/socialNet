import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from '../MyPosts/MyPostsContainer';
import {ProfileUserType} from '../../api/api';
import s from './Profile.module.scss'
type ProfilePropsType = {
    isOwner: boolean
    profile: ProfileUserType | null
    status: string | null
    updateStatus: (statusText: string) => void
    savePhoto: (photo: File) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {


    return (
        <div className={s.ProfileBlock}>
            <ProfileInfo
                isOwner={props.isOwner} profile={props.profile} status={props.status}
                updateStatus={props.updateStatus}
                savePhoto={props.savePhoto}
            />
            <MyPostsContainer/>
        </div>
    );
}