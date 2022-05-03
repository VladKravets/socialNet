import React, {JSXElementConstructor} from 'react';
import s from './Profile.module.css'
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {ProfileResponseType, getUserProfileTC} from "../../Redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {mapStateToPropsForRedirect, withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component<any> {


    componentDidMount() {
        let userId = this.props.router.params.userID;
        if (!userId) {
            userId = 21297
        }
        this.props.getUserProfileTC(userId)
    }

    render() {
        return (
            <div className={s.profile}>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}

type MapStateToPropsType = {
    profile: ProfileResponseType | null
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
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


export default compose(
    connect(mapStateToProps, {getUserProfileTC}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
