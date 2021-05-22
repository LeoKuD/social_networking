import dialogReducer from "./Dialog-Page-Reducer";
import friendsReducer from "./Friends-Page-Reduser";
import profileReducer from "./Profile-Page-Reducer";

let store = {
    _state: {
        progilePage: {
            posts: [
                { id: 1, post: 'Hi, how are you?', countslike: 15 },
                { id: 1, post: 'Hi, how are you?', countslike: 15 },
                { id: 1, post: 'I am OK', countslike: 30 }
            ],
            textPost: '111111'
        },
        messagesPage: {
            dialogs: [
                { id: 1, name: 'Dima' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'Dima' },
                { id: 4, name: 'Oly' },
                { id: 5, name: 'Pasha' }
            ],
            messages: [
                { id: 1, message: 'Hi how are you?' },
                { id: 2, message: 'Do ypo speak english?' },
                { id: 3, message: 'Yo?' },
                { id: 4, message: 'I learn react?' }
            ],
            newTextMessage: 'Hi, my name is Evgeniy'
        },
        friendsPage: {
            friends: [
                { id: 1, name: 'Dima' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'Dima' }
            ]
        }
    },
    getState() {
        return this._state
    },
    _callSubscribers() {

    },
    subscriber(observer) {
        this._callSubscribers = observer
    },
    dispatch(action) {
        this._state.progilePage = profileReducer(this._state.progilePage, action)
        this._state.messagesPage = dialogReducer(this._state.messagesPage, action)
        this._state.friendsPage = friendsReducer(this._state.friendsPage)
        this._callSubscribers(this._state)
    }
}

export default store