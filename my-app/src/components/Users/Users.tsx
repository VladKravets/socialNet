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
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

export class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
            if (i === 20) break;
        }

        return (
            <div>
                <div className={s.numbersPage}>
                    {pages.map((page, index) => {
                        return (
                            <span key={index + 1}
                                  className={this.props.currentPage === page ? s.selected : ''}
                                  onClick={(e) => {
                                      this.onPageChanged(page)
                                  }}>
                                {page}
                            </span>
                        )
                    })}
                </div>
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
