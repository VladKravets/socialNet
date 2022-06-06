import React from 'react';
import s from './Preloader.module.css'

export const Preloader = () => {
    return (
        <div className={s.spinner}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};
