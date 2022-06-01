import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {logout} from "../../Redux/auth-reducer";
import {useDispatch} from "react-redux";

export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string,
        youtube: string,
        github: string,
        mainLink: string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }

}
type HeaderPropsType = {
    isAuth: boolean
    login: string
    ava: string
    SetAuthUserData?: (id: number, login: string, email: string) => void
    SetUserProfile?: (profile: ProfileType) => void
}
const Header: React.FC<HeaderPropsType> = (props) => {
    let dispatch = useDispatch()

    let logoutClickHandler = () => {
        dispatch(logout())
    }
    return (
        <header className={s.header}>
            <div className={s.title}>.forEach()</div>

            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>
                        Hello,{props.login}
                        <button onClick={logoutClickHandler}>LOG OUT</button>
                    </div>
                    : <NavLink to={'/login'}>
                        Please login to continue
                    </NavLink>
                }
            </div>
        </header>
    );
};
export default Header;





