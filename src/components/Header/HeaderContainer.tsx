import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserDataTC} from "../../Redux/auth-reducer";
import {RootStateType} from "../../Redux/redux-store";

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}




class HeaderContainer extends React.Component<any> {
    componentDidMount() {
       this.props.getAuthUserDataTC()
    }
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: RootStateType):MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})
export default connect(mapStateToProps, {getAuthUserDataTC})(HeaderContainer)