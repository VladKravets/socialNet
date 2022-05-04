import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = (props: any) => {
    return (
        <header className={s.header}>
            <div className={s.title}>.forEach()</div>

            <div className={s.loginBlock}>
                {props.isAuth
                    ? `Hello,${props.login}`
                    : <NavLink to={'/login'}>
                        Please login to continue
                    </NavLink>
                }
            </div>
        </header>
    );
};
export default Header;





