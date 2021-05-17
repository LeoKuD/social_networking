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
        console.log('sss');
    },
    addMessage() {
        let newMessage = {
            id: 5,
            message: this._state.messagesPage.newTextMessage
        }
        this._state.messagesPage.messages.push(newMessage)
        this.updateNewMessages('')
        this._callSubscribers(this._state)
    },
    updateNewMessages(newMessage) {
        this._state.messagesPage.newTextMessage = newMessage
        this._callSubscribers(this._state)
    },
    subscriber(observer) {
        this._callSubscribers = observer
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                post: this._state.progilePage.textPost,
                countslike: 0
            }
            this._state.progilePage.posts.push(newPost)
            this._state.progilePage.textPost = ''
            this._callSubscribers(this._state)
        } else if (action.type === 'UPDATA-POST-TEXT') {
            this._state.progilePage.textPost = action.newText;
            this._callSubscribers(this._state)
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 5,
                message: this._state.messagesPage.newTextMessage
            }
            this._state.messagesPage.messages.push(newMessage)
            this._state.messagesPage.newTextMessage = ''
            this._callSubscribers(this._state)
        } else if (action.type === 'UPDATE-NEW-MESSAGE') {
            this._state.messagesPage.newTextMessage = action.newMessage
            this._callSubscribers(this._state)
        }
    }
}

export default store
window.store = store