import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./Auth-Reducer";
import dialogReducer from "./Dialog-Page-Reducer";
import friendsReducer from "./Friends-Page-Reduser";
import profileReducer from "./Profile-Page-Reducer";
import usersReducer from "./Users-Page-Reducer";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogReducer,
    friendsPage: friendsReducer,
    usersPage: usersReducer,
    auth: authReducer

})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store