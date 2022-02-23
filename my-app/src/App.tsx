import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import {
    addPost,
    DialogsPageType,
    DialogType,
    MessageType,
    PostType,
    ProfilePageType,
    RootStateType
} from "./Redux/state";

/*export type  StatePropsType = {
    state: RootStateType
}*/

export type AppPropsType = {
    posts: Array<PostType>
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    addPost: (postMessage: string) => void
}

const App = (props: AppPropsType) => {

    return (
        <BrowserRouter>
            <div className={'app'}>
                <div className='app-wrapper'>
                    <Header/>
                    <Nav/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path={'/dialogs/*'}
                                   element={<Dialogs messages={props.messages}
                                                     dialogs={props.dialogs}
                                   />}/>
                            <Route path={'/users/*'} element={<Profile posts={props.posts}
                                                                       addPost={props.addPost}/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
