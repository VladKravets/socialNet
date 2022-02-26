import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, RootStateType} from './Redux/state';



export let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <App
            dialogs={state.dialogsPage.dialogs}
            messages={state.dialogsPage.messages}
            posts={state.profilePage.posts}
            addPost={addPost}
        />
        , document.getElementById('root'));
}


