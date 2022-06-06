import React from 'react';
import style from './Header.module.scss';
import {Link} from 'react-router-dom';
import exitIcon from  '../../assets/img/exit.png'

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
                <div className={style.logo}>.forEach()</div>
                <div className={style.userData}>
                    {
                        isAuth
                            ? <div className={style.blockLogin}>{` ${login} `}
                                <div className={style.exit} onClick={logoutHandle}>
                                    <img className={style.logoExit} src={exitIcon} alt=""/>
                                </div>
                            </div>
                            : <Link to={'/login'}>Login</Link>
                    }
                </div>
            </div>
        </header>
    )
}