import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./MyPost/Post";
import {ActionsType, PostType, StoreType,} from "../../../Redux/state";
import {AddPostActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";

type MyPostsPropsType = {
    posts: Array<PostType>
    name: string
    store: StoreType
    dispatch: (action: ActionsType) => void
    newPostText: string
}

const MyPostsContainer: React.FC<MyPostsPropsType> = (props) => {
    let state = props.store.getState()

    const postsElements = props.posts.map(post => <Post id={post.id} message={post.message}
                                                        likesCount={post.likesCount}/>)

    const onAddPost = () => {
        props.addPost = () => {
            props.store.dispatch(AddPostActionCreator(''))
        }

    }
    const onPostChange = (text: string) => {
        let action = props.newPostText(text)
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: (e.currentTarget.value)})
    }

    return (
        <div className={s.postsBlock}>
            <h3>{props.name}</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>

            <div className={s.posts}>{postsElements}</div>
        </div>
    );
    return <MyPosts updateNewPostText={onPostChange}
                    addPost={onAddPost}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText
                    }/>
}
export default MyPostsContainer;
