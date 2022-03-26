import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./MyPost/Post";
import {ActionsType, PostType, StoreType,} from "../../../Redux/state";
import {AddPostActionCreator, ChangeNewTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";
import {store} from "../../../Redux/redux-store";

type MyPostsPropsType = {
    posts: Array<PostType>
    name: string
    store: StoreType
    dispatch: (action: ActionsType) => void
    newPostText: string
}

const MyPostsContainer: React.FC<MyPostsPropsType> = (props) => {

    const postsElements = props.posts.map(post => <Post id={post.id} message={post.message}
                                                        likesCount={post.likesCount}/>)


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
    return (
        <StoreContext.Consumer>
            {(store) => {
                const state =store.getState()
                const onAddPost = () => {
                    props.addPost = () => {
                        store.dispatch(AddPostActionCreator(''))
                    }

                }
                const onPostChange = (text: string) => {
                    let action = props.newPostText(text)
                    store.dispatch(ChangeNewTextActionCreator(text))
                }
                return <MyPosts updateNewPostText={onPostChange}
                                addPost={onAddPost}
                                posts={store.getState().profilePage.posts}
                                newPostText={store.getState().profilePage.newPostText
                                }/>
            }
            }

        </StoreContext.Consumer>
    )
}
export default MyPostsContainer;
