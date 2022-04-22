import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = (props: any) => {
    return (
        <header className={s.header}>
            <div className={s.title}>.forEach()</div>

            <div className={s.loginBlock}>
                {props.isAuth
                    ? props.login
                    : <NavLink to={'/login'}>
                        LOGIN
                    </NavLink>
                }
            </div>
        </header>
    );
};
export default Header;





