import { combineReducers, createStore } from "redux";
import dialogReducer from "./Dialog-Page-Reducer";
import friendsReducer from "./Friends-Page-Reduser";
import profileReducer from "./Profile-Page-Reducer";

let reducers = combineReducers({
    progilePage: profileReducer,
    messagesPage: dialogReducer,
    friendsPage: friendsReducer

})

let store = createStore(reducers)

window.store = store

export default store