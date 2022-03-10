import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./Redux/state";


export let rerenderEntireTree = () => {
    ReactDOM.render(
        <App store={store}
             addPost={store.addPost.bind(store)}
             changePostCallback={store.changePostCallback.bind(store)}
             posts={store._state.profilePage.posts}
             message={store._state.profilePage.newPostText}/>
        , document.getElementById('root'));
}


rerenderEntireTree()

store.subscribe(rerenderEntireTree)