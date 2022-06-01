import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {AuthReducer} from "./auth-reducer";
import thunkMiddleware  from "redux-thunk"
import {appReducer} from "./appReducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage:usersReducer,
    Auth:AuthReducer,
    App: appReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer,applyMiddleware(thunkMiddleware))

export type ReduxStoreType = typeof store;
export type RootStateType = ReturnType<typeof rootReducer>;

export default store;