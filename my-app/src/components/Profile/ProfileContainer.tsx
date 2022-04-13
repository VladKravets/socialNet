import React, {JSXElementConstructor} from 'react';
import s from './Profile.module.css'
import axios from "axios";
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/redux-store";
import {ProfileResponseType, setUserProfile} from "../../Redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";

type MapStateToPropsType = {
    profile: ProfileResponseType | null
}

class ProfileContainer extends React.Component<any> {


    componentDidMount() {
        //@ts-ignore
        let userID = this.props.router.params.userID;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID)
            .then(response => {
                this.props.setUserProfile(response.data)
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

export const  withRouter=(Component:JSXElementConstructor<any>):JSXElementConstructor<any>=> {
    function ComponentWithRouterProp(props:any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer))