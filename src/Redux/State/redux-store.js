import { combineReducers, createStore } from "redux";
import dialogReducer from "./Dialog-Page-Reducer";
import friendsReducer from "./Friends-Page-Reduser";
import profileReducer from "./Profile-Page-Reducer";
import usersReducer from "./Users-Page-Reducer";

let reducers = combineReducers({
    progilePage: profileReducer,
    messagesPage: dialogReducer,
    friendsPage: friendsReducer,
    usersPage: usersReducer

})

let store = createStore(reducers)

window.store = store

export default store