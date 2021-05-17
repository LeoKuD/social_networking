import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addMessage, addPost, updateNewMessages, updatePostText } from './Redux/State/State';

export let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                newPost={addPost}
                newTextPost={state.progilePage.textPost}
                updatePostText={updatePostText}
                messagesPage={state.messagesPage}
                addMessage={addMessage}
                updateMessage={updateNewMessages} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
