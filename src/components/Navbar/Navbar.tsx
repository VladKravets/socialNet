import React from 'react';
import {NavLink} from 'react-router-dom';
import gif from "../../assets/img/tom.gif"
import cn from './Navbar.module.scss'

export const Navbar = () => {
    const cln = ({isActive}: { isActive: boolean }) => isActive ? `${cn.default} ${cn.active}` : `${cn.default}`

    return (
        <nav className={cn.navbar}>
            <ul>
                <li><NavLink
                    to={'/profile'}
                    className={cln}>Profile</NavLink></li>
                <li><NavLink
                    to={'/dialogs'}
                    className={cln}>Message</NavLink></li>
                <li><NavLink
                    to={'/users'}
                    className={cln}>Users</NavLink></li>
                <li><NavLink
                    to={'/news'}
                    className={cln}>News</NavLink></li>
                <li><NavLink
                    to={'/'}
                    className={({isActive}) => isActive ? `${cn.default} ${cn.active}` : `${cn.default}`}>Settings/Main</NavLink>
                </li>
            </ul>
            <img className={cn.gif} src={gif} alt=""/>
        </nav>
    );
}