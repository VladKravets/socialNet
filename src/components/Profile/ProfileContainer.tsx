import React, {JSXElementConstructor} from 'react';
import s from './Profile.module.css'
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {ProfileResponseType, getUserProfileTC, getUserStatusTC, updateUserStatusTC} from "../../Redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {compose} from "redux";


class ProfileContainer extends React.Component<any> {


    componentDidMount() {
        let userId = this.props.router.params.userID;
        if (!userId) {
            userId = 21297     //21297
        }
        this.props.getUserProfileTC(userId)

        this.props.getUserStatusTC(userId)

    }

    render() {
        return (
            <div className={s.profile}>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                         updateStatus={this.props.updateUserStatusTC}/>
            </div>
        );
    }
}

type MapStateToPropsType = {
    profile: ProfileResponseType | null,
    status: string
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
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


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileTC, getUserStatusTC, updateUserStatusTC}),
    withRouter,
)(ProfileContainer)