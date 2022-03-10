import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store, {PostType, StoreType} from "../../Redux/state";


export type ProfilePropsType = {
    addPost: (postMessage: string) => void
    message: string
    store:StoreType
    posts: Array<PostType>
    changePostCallback: (newText: string) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts newPostText={props.message}
                     posts={props.posts}
                     name={'My Posts'}
                     addPost={props.addPost}
                     changePostCallback={props.store.changePostCallback.bind(props.store)}/>
        </div>
    );
};

export default Profile;
