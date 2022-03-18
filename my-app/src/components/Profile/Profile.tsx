import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import  {AddPostActionType, ChangeNewTextActionType, PostType, StoreType} from "../../Redux/state";


export type ProfilePropsType = {
    dispatch:(action:AddPostActionType|ChangeNewTextActionType)=>void
    message: string
    store:StoreType
    posts: Array<PostType>
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts newPostText={props.message}
                     posts={props.posts}
                     name={'My Posts'}
                     dispatch={props.dispatch}/>
        </div>
    );
};

export default Profile;
