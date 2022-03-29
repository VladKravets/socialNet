import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./Redux/redux-store";
import {Provider} from "react-redux";

export let rerenderEntireTree = (state: any) => {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>, document.getElementById('root'));
}


rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})