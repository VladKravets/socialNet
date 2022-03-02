import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, state, subscribe} from './Redux/state';


export let rerenderEntireTree = () => {
    ReactDOM.render(
        <App
            dialogs={state.dialogsPage.dialogs}
            messages={state.dialogsPage.messages}
            posts={state.profilePage.posts}
            addPost={addPost}
        />
        , document.getElementById('root'));
}


rerenderEntireTree()

subscribe(rerenderEntireTree)