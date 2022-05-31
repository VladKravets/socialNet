import s from "./Login.module.css"
import React from 'react';
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {AppStateType} from "../../Redux/redux-store";
import {LoginForm} from "./LoginForm";

export const Login = () => {
    const authStatus = useSelector<AppStateType, boolean>(state => state.auth.isAuth);

    return (<>
            {authStatus
                ?
                <Navigate to={'/profile'}/>
                : <div className={s.loginBlock}>
                    <div className={`${s.loginBlock} ${s.loginInfo}`}>
                        <h2>Network</h2>
                        <span>To log in get registered here
                            Or use common test account credentials:
                            <h4>Email: free@samuraijs.com</h4>
                            <h4>Password: free</h4></span>
                        <img src="/img/log_info.png"/>
                    </div>
                    <div className={`${s.loginBlock} ${s.loginForm}`}>
                        <h2>Sign in</h2>
                        <LoginForm/>
                    </div>
                </div>
            }
        </>
    )
};