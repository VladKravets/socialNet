import React from 'react';
import { RootStateType} from "../../../Redux/state";
import {AddPostActionCreator, ChangeNewTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

type MyPostsPropsType = {
    store?:RootStateType
}

const MyPostsContainer: React.FC<MyPostsPropsType> = (props) => {

    // const postsElements = props.posts.map(post => <Post id={post.id} message={post.message}
    //                                                     likesCount={post.likesCount}/>)
    //
    //
    // return (
    //     <div className={s.postsBlock}>
    //         <h3>{props.name}</h3>
    //         <div>
    //             <div>
    //                 <textarea onChange={onPostChange}
    //                           value={props.newPostText}/>
    //             </div>
    //             <div>
    //                 <button onClick={addPost}>Add post</button>
    //             </div>
    //         </div>
    //
    //         <div className={s.posts}>{postsElements}</div>
    //     </div>
    // );
    return (
        <StoreContext.Consumer>
            {(store) => {
                const onAddPost = (newPostText:string) => {
                        store.dispatch(AddPostActionCreator(newPostText))

                }
                const onPostChange = (text: string) => {
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
