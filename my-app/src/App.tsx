import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path={'/dialogs/*'} element={<Dialogs />}/>
                        <Route path={'/users/*'} element={<Profile/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
