import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {AuthDataType} from "../../Redux/auth-reducer";

type HeaderPropsType = {
    data: AuthDataType
    isAuth: boolean
}
const Header:React.FC<HeaderPropsType> = (props) => {
    return (
        <header className={s.header}>
            <div className={s.title}>.forEach()</div>

            <div className={s.loginBlock}>
                {props.isAuth
                    ? `Hello,${props.data}`
                    : <NavLink to={'/login'}>
                        Please login to continue
                    </NavLink>
                }
            </div>
        </header>
    );
};
export default Header;





