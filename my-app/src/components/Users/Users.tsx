import React from 'react';
import s from './Users.module.css'
import {UsersType} from "../../Redux/users-reducer";
import axios, {AxiosResponse} from 'axios'
import userLogo from '../../assets/images/userLogo.png'


type UsersPropsType = {
    users: UsersType[]
    setUsers: (users: UsersType[]) => void
    unfollow: (userID: number) => void
    follow: (userID: number) => void
}

export class Users extends React.Component<UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <img className={s.photo}
                                 src={user.photos.small != null
                                     ? user.photos.small
                                     : userLogo}
                                 alt="logo"/>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(user.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(user.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{'user.location.country'}</div>
                            <div>{'user.location.city'}</div>
                        </span>
                    </span>
                    </div>)
                }
            </div>
        );
    }
}
