import {ProfileUserType} from '../../../api/api';
import React from 'react';
import {Contact} from './Contact';
import s from './ProfileData.module.css'
type ProfileDataPropsType = {
    profile: ProfileUserType
}

export const ProfileData: React.FC<ProfileDataPropsType> = ({profile}) => {
    return (
        <div className={s.userInform}>
            <div className={s.item}>
                About me: {profile.aboutMe}
            </div>
            <div className={s.item}>
                Looking for a job: {profile.lookingForAJob}
            </div>
            <div className={s.item}>
                Description: {profile.lookingForAJobDescription}
            </div>
            <div className={s.item}>
                Contacts:
                <div style={{paddingLeft: 15}}>
                    {
                        Object.keys(profile.contacts).map(key => {
                            return (
                                <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}