import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './Redux/state';
import store from "./Redux/state";


export let rerenderEntireTree = () => {
    ReactDOM.render(
        <App store={state}
             addPost={store.addPost}
             changePostCallback={store.changePostCallback}
             posts={store._state.profilePage.posts}
             message={store._state.profilePage.newPostText}/>
        , document.getElementById('root'));
}


rerenderEntireTree()

store.subscribe(rerenderEntireTree)