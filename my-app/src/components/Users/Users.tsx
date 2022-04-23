import React from 'react';
import s from './Users.module.css'
import {UsersType} from "../../Redux/users-reducer";
import userLogo from '../../assets/images/userLogo.png'
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../API/Api";


type UsersPropsType = {
    users: UsersType[]
    unfollow: (userID: number) => void
    follow: (userID: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Users: React.FC<UsersPropsType> = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    if (props.currentPage > 10 && pageCount - props.currentPage > 10) {
        for (let i = props.currentPage - 10; i <= props.currentPage + 10; i++)
            pages.push(i)
    } else if (0 < props.currentPage && props.currentPage <= 10) {
        for (let i = 1; i <= 20; i++)
            pages.push(i)
    } else if (pageCount - props.currentPage <= 10) {
        for (let i = pageCount - 20; i <= pageCount; i++)
            pages.push(i)
    }

    return (
        <div>
            <div className={s.numbersPage}>
                {pages.map((page, index) => {
                    return (
                        <span key={index + 1}
                              className={props.currentPage === page ? s.selected : s.pagination}
                              onClick={(e) => {
                                  props.onPageChanged(page)
                              }}>
                                {page}
                            </span>
                    )
                })}
            </div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <NavLink to={'./../profile/' + user.id}>
                            <img className={s.photo}
                                 src={user.photos.small != null
                                     ? user.photos.small
                                     : userLogo}
                                 alt="logo"/>
                                </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => {
                                    usersAPI.deleteUsers(user)
                                        .then((data) => {
                                            if (data.resultCode === 0) {
                                                props.unfollow(user.id)

                                            }
                                        })
                                }}>Unfollow</button>
                                : <button onClick={() => {

                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "3bb1f301-4343-478c-bd6d-e432168f19d7"
                                            }
                                        }
                                    )
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(user.id)

                                            }

                                        })

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