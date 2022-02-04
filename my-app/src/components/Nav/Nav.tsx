import React from 'react';
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/users">Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs">Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="#">News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="#">Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="#"> Settings</NavLink>
            </div>
        </nav>
    );
};

export default Nav;
