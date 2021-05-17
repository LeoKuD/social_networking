import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/State/State';

export let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()}
                newPost={store.addPost.bind(store)}
                newTextPost={state.progilePage.textPost}
                updatePostText={store.updatePostText.bind(store)}
                messagesPage={state.messagesPage}
                addMessage={store.addMessage.bind(store)}
                updateMessage={store.updateNewMessages.bind(store)}
                friends={state.friendsPage} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState())

store.subscriber(renderEntireTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
