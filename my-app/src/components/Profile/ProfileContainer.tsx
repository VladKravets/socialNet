import React from 'react';
import s from './Profile.module.css'
import axios from "axios";
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/redux-store";
import {ProfileResponseType, setUserProfile} from "../../Redux/profile-reducer";
type MapStateToPropsType = {
    profile: ProfileResponseType | null
}

class ProfileContainer extends React.Component<any> {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {

        return (
            <div className={s.profile}>
                <Profile profile={this.props.profile}/>
            </div>
        );
    }
}

const mapStateToProps = (state: RootStateType):MapStateToPropsType => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)