import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginTC } from "../../Redux/auth-reducer";
import { AppStateType } from "../../Redux/redux-store";
import { LoginForm } from "./LoginForm";

export type LoginPropsType = {
    login: string
    password: string
    remember: boolean
}

const mapStateToProps = (state: AppStateType): { isAuth: boolean } => {
    return {
        isAuth: state.auth.isAuth,
    }
}

const Login = (props: any) => {
    if (props.isAuth) return <Navigate to={'/profile'} />

    const onSubmit = () => {
    }

    return (
        <LoginForm callback={onSubmit}/>
    );
}

export default connect(mapStateToProps, { loginTC })(Login);