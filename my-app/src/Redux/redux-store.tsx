import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {StoreType} from "./state";

const reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer
})

export let store:StoreType=createStore(reducers)