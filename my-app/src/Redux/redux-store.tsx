import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

const reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer
})

const store = createStore(profileReducer)


export default store