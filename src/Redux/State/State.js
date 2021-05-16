import { renderEntireTree } from "../../Render"

let state = {
    progilePage: {
        posts: [
            { id: 1, post: 'Hi, how are you?', countslike: 15 },
            { id: 1, post: 'Hi, how are you?', countslike: 15 },
            { id: 1, post: 'I am OK', countslike: 30 }
        ]
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
        ]
    },
    friendsPage: {
        friends: [
            { id: 1, name: 'Dima' },
            { id: 2, name: 'Andrey' },
            { id: 3, name: 'Dima' }
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        post: postMessage,
        countslike: 0
    }
    state.progilePage.posts.push(newPost)
    renderEntireTree(state)
}

export default state