import React, {JSXElementConstructor} from 'react';
import s from './Profile.module.css'
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/redux-store";
import {ProfileResponseType, setUserProfile} from "../../Redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {profileAPI} from "../../API/Api";

type MapStateToPropsType = {
    profile: ProfileResponseType | null
}

class ProfileContainer extends React.Component<any> {


    componentDidMount() {
        let userID = this.props.router.params.userID;
        profileAPI.getShowProfile(userID)
            .then((data) => {
                this.props.setUserProfile(data)
            })
    }

    render() {

        return (
            <div className={s.profile}>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})

export const withRouter = (Component: JSXElementConstructor<any>): JSXElementConstructor<any> => {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer))