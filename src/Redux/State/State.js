import { renderEntireTree } from "../../Render"

let state = {

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
}

window.state = state

export let addPost = () => {
    let newPost = {
        id: 5,
        post: state.progilePage.textPost,
        countslike: 0
    }
    state.progilePage.posts.push(newPost)
    updatePostText('')
    renderEntireTree(state)
}

export let updatePostText = (newText) => {
    state.progilePage.textPost = newText;
    renderEntireTree(state)
}

export let addMessage = () => {
    let newMessage = {
        id: 5,
        message: state.messagesPage.newTextMessage
    }
    state.messagesPage.messages.push(newMessage)
    updateNewMessages('')
    renderEntireTree(state)
}

export let updateNewMessages = (newMessage) => {
    state.messagesPage.newTextMessage = newMessage
    renderEntireTree(state)
}

export default state