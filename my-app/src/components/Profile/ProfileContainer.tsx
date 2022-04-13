import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import axios from "axios";
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/redux-store";
import {setUserProfile} from "../../Redux/profile-reducer";


class ProfileContainer extends React.Component<any> {
    componentDidMount() {
        this.props.setLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data.profile)
            })
    }

    render() {

        return (
            <div className={s.profile}>
                <Profile/>
            </div>
        );
    }
}

const mapStateToProps = (state: RootStateType) => ({profile: state.profilePage})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)