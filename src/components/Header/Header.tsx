import React from 'react';
import style from './Header.module.scss';
import {Link} from 'react-router-dom';
import {SButton} from '../SButton/SButton';
import logo from "../../assets/forEach()-logos/forEach()-logos.jpeg"

type HeaderType = {
    login: string | null
    isAuth: boolean
    logout: () => void
}

export const Header: React.FC<HeaderType> = ({isAuth, login, logout}) => {

    const logoutHandle = () => {
        logout()
    }

    return (
        <header className={style.header}>
            <div className={'container'}>
                <img className={style.logo} src={logo} alt=""/>
                <div>
                    {isAuth
                        ? <>{` ${login} `}
                            <SButton onClick={logoutHandle}>выйти</SButton>
                        </>
                        : <Link to={'/login'}>Login</Link>
                    }
                </div>
            </div>
        </header>
    )
}