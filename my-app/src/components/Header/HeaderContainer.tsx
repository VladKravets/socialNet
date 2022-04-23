import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import { setUserDataAC} from "../../Redux/auth-reducer";
import {RootStateType} from "../../Redux/redux-store";
import {authAPI} from "../../API/Api";

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}




class HeaderContainer extends React.Component<any> {
    componentDidMount() {
       authAPI.authGet()
            .then((data) => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    this.props.setUserDataAC(id,email,login)
                }
            })
    }
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: RootStateType):MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})
export default connect(mapStateToProps, {setUserDataAC})(HeaderContainer)