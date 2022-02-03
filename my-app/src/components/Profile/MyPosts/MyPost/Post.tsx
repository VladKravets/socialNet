import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
    message: string
    likesCount:number
}

const Post: React.FC<PostPropsType> = (props) => {
    return (
        <div className={s.item}>
            <img src="https://icon-library.com/images/ninja-icon-png/ninja-icon-png-22.jpg" alt=""/>
            {props.message}
            <div>
                <span className={s.likeCount}> ♥ {props.likesCount} </span>
            </div>
        </div>
    );
};

export default Post;
