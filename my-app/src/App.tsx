import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Music} from "./components/Music";
import {News} from "./components/News";
import {Settings} from "./components/Settings";
import UsersContainer from "./components/Users/UsersContainer";


const App = () => {
    return (
        <BrowserRouter>
            <div className={'app'}>
                <div className='app-wrapper'>
                    <Header/>
                    <Nav/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path={'/dialogs/*'} element={<DialogsContainer/>}/>
                            <Route path={':id'} element={<DialogsContainer/>}/>
                            <Route path={'/profile/*'} element={<Profile/>}/>
                            <Route path={'/users/*'} element={<UsersContainer/>}/>
                            <Route path={'/music'} element={<Music/>}/>
                            <Route path={'/news'} element={<News/>}/>
                            <Route path={'/settings'} element={<Settings/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
