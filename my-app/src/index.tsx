import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'Hello samurai', likesCount: 712},
    {id: 2, message: 'How are you?', likesCount: 491},
    {id: 2, message: 'I\'m\ a ninja', likesCount: 31},
]
let dialogs = [
    {id: 1, name: 'Vlad'},
    {id: 2, name: 'Natasha'},
    {id: 3, name: 'Yuliana'},
    {id: 4, name: 'Svetlana'},
    {id: 5, name: 'Alex'},
    {id: 6, name: 'Mihail'},
]
let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'I\'m\ great'},
    {id: 4, message: 'Hello everyone'},
    {id: 5, message: 'I ♥ you'},
    {id: 6, message: 'Where are you?'},
]

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));


reportWebVitals();
