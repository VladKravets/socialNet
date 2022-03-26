import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "./StoreContext"
import {store} from "./Redux/redux-store";

export let rerenderEntireTree = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>, document.getElementById('root'));
}


rerenderEntireTree()

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})