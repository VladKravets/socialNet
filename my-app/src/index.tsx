import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./Redux/redux-store";


export let rerenderEntireTree = () => {
    ReactDOM.render(
        <App store={store}/>, document.getElementById('root'));
}


rerenderEntireTree()

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})