import React from 'react';
import s from './Users.module.css'
import {UsersType} from "../../Redux/users-reducer";

type UsersPropsType={
    users:UsersType[]
    setUsers:(users:UsersType[])=>void
    unfollow:(userID:number)=>void
    follow:(userID:number)=>void
}

export const Users:React.FC<UsersPropsType> = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Vlad_Tepes_002.jpg/1200px-Vlad_Tepes_002.jpg',
                followed: true,
                fullName: 'Vlad',
                status: 'I am a samurai',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Vlad_Tepes_002.jpg/1200px-Vlad_Tepes_002.jpg',
                followed: true,
                fullName: 'Natasha',
                status: 'I am a teacher',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 3,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Vlad_Tepes_002.jpg/1200px-Vlad_Tepes_002.jpg',
                followed: false,
                fullName: 'Ritis',
                status: 'I am a entrepreneur',
                location: {city: 'Vilnus', country: 'Litva'}
            },
            {
                id: 4,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Vlad_Tepes_002.jpg/1200px-Vlad_Tepes_002.jpg',
                followed: false,
                fullName: 'John',
                status: 'I am a NBA-player',
                location: {city: 'Vancuver', country: 'Canada'}
            },

        ],)
    }
    return (
        <div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <img className={s.photo} src={user.photoUrl} alt=""/>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => {
                                    props.unfollow(user.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(user.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{user.location.city}</div>
                            <div>{user.location.country}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

