import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {addPost} from "./Redux/state";

ReactDOM.render(<App dialogs={state.dialogsPage.dialogs}
                     messages={state.dialogsPage.messages}
                     posts={state.profilePage.posts}
                     addPost={addPost}
/>, document.getElementById('root'));


reportWebVitals();
