import React from 'react';
import avatar from '../../../assets/img/user.png';
import {Preloader} from '../../Preloader/Preloader';
import {ProfileStatus} from './ProfileStatus';
import {Nullable, ProfileUserType} from '../../../api/api';
import {ProfileData} from './ProfileData';
import {ProfileDataForm} from './ProfileDataForm';
import s from './ProfileInfo.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons/faPlus";

type ProfileInfoPropsType = {
    isOwner: boolean
    profile: Nullable<ProfileUserType>
    status: Nullable<string>
    updateStatus: (statusText: string) => void
    savePhoto: (photo: File) => void
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> =
    ({isOwner, profile, status, updateStatus, savePhoto}) => {

        const [editMode, setEditMode] = React.useState(false)

        const onProfilePhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.files) {
                savePhoto(e.target.files[0])
            }
        }

        if (!profile) return (
            <Preloader/>
        )

        return (
            <div className={s.ProfileInfoBlock}>
                <div>
                    <div className={s.userName}>
                        {profile.fullName}✔
                    </div>

                    <ProfileStatus status={status} updateStatus={updateStatus}/>
                    <div className={s.addFileBlock}>
                        <img className={s.userAvatar} src={profile.photos.large ? profile.photos.large : avatar}
                             alt={'avatar'}/>
                        {isOwner &&<div>
                            <label htmlFor={'firstImg'} className={s.labelAddPhoto}><FontAwesomeIcon icon={faPlus}/>Change photo</label>
                            <input id={'firstImg'}  type="file" onChange={onProfilePhotoSelected}/>
                        </div>
                        }
                    </div>
                </div>

                {editMode
                    ? <ProfileDataForm profile={profile}/>
                    : <ProfileData profile={profile}/>
                }

                <br/>
            </div>
        );
    }


