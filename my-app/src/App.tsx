import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile, {ProfilePropsType} from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import store, {
    AddPostActionType,
    ChangeNewTextActionType,
    SendMessageActionType,
    StoreType,
    UpdateMessageBodyActionType
} from "./Redux/state";

export type  StorePropsType = ProfilePropsType & {
    store: StoreType
    dispatch: (action: AddPostActionType | ChangeNewTextActionType | UpdateMessageBodyActionType | SendMessageActionType) => void
}


const App = (props: StorePropsType) => {
    const state = props.store.getState
    return (
        <BrowserRouter>
            <div className={'app'}>
                <div className='app-wrapper'>
                    <Header/>
                    <Nav/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path={'/dialogs/*'}
                                   element={<Dialogs messages={props.store._state.dialogsPage.messages}
                                                     dialogs={props.store._state.dialogsPage.dialogs}

                                   />}/>
                            <Route path={'/users/*'} element={<Profile posts={props.store._state.profilePage.posts}
                                                                       dispatch={props.store.dispatch.bind(props.store)}
                                                                       message={props.store._state.profilePage.newPostText}
                                                                       store={props.store}

                            />}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
