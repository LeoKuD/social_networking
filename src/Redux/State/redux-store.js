import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { authReducer } from "./Auth-Reducer";
import dialogReducer from "./Dialog-Page-Reducer";
import friendsReducer from "./Friends-Page-Reduser";
import profileReducer from "./Profile-Page-Reducer";
import usersReducer from "./Users-Page-Reducer";
import thunkMiddleware from 'redux-thunk';
import appReducer from "./app-Reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogReducer,
    friendsPage: friendsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


window.store = store

export default store