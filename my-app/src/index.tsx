import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./Redux/state";


export let rerenderEntireTree = () => {
    ReactDOM.render(
        <App store={store}
             dispatch={store.dispatch.bind(store)}
             posts={store._state.profilePage.posts}
             message={store._state.profilePage.newPostText}/>
        , document.getElementById('root'));
}


rerenderEntireTree()

store.subscribe(rerenderEntireTree)