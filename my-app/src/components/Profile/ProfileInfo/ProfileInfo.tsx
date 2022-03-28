import React from 'react';

import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://media.istockphoto.com/photos/business-man-pushing-large-stone-up-to-hill-business-heavy-tasks-and-picture-id825383494?k=20&m=825383494&s=612x612&w=0&h=tEqZ5HFZcM3lmDm_cmI7hOeceiqy9gYrkyLTTkrXdY4=" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    );
};

export default ProfileInfo;
