import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import {DialogsPageType, DialogType, MessageType, PostType, ProfilePageType, RootStateType} from "./Redux/state";

/*export type  StatePropsType = {
    state: RootStateType
}*/

export type PropsType = {
    posts: Array<PostType>
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

const App = (props: PropsType) => {

    return (
        <BrowserRouter>
            <div className={'app'}>
                <div className='app-wrapper'>
                    <Header/>
                    <Nav/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path={'/dialogs/*'}
                                   element={<Dialogs messages={props.messages} dialogs={props.dialogs}/>}/>
                            <Route path={'/users/*'} element={<Profile posts={props.posts}/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
