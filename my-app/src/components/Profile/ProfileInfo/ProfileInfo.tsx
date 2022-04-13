import React from 'react';
import s from './ProfileInfo.module.css'
import {Prealoader} from "../../../common/Prealoder/Prealoader";
import {ProfileResponseType} from "../../../Redux/profile-reducer";

export type ProfileInfoType = {
    profile: ProfileResponseType | null

}

const ProfileInfo: React.FC<ProfileInfoType> = (props) => {
    if (!props.profile) {
        return <Prealoader/>
    }
    return (
        <div>
            <div>
                <img
                    src="https://media.istockphoto.com/photos/business-man-pushing-large-stone-up-to-hill-business-heavy-tasks-and-picture-id825383494?k=20&m=825383494&s=612x612&w=0&h=tEqZ5HFZcM3lmDm_cmI7hOeceiqy9gYrkyLTTkrXdY4="
                    alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <div>About me:{props.profile.aboutMe}</div>
                <hr/>
                ava+description

            </div>
        </div>
    );
};

export default ProfileInfo;
