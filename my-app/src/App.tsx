import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {StoreType} from "./Redux/state";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

export type  StorePropsType =  {
    store: StoreType
}


const App = (props: StorePropsType) => {
    return (
        <BrowserRouter>
            <div className={'app'}>
                <div className='app-wrapper'>
                    <Header/>
                    <Nav/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path={'/dialogs/*'}
                                   element={<DialogsContainer store={props.store}/>}/>
                            <Route path={'/users/*'} element={<Profile store={props.store}/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
