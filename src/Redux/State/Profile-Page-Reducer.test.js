import profileReducer, { addPostActionCreator, deletedPost } from "./Profile-Page-Reducer"

let state = {
    posts: [
        { id: 1, post: 'Hi, how are you?', countslike: 15 },
        { id: 2, post: 'Hi, how are you?', countslike: 15 },
        { id: 3, post: 'I am OK', countslike: 30 }
    ]
}


describe('lenght add posts should be incrementer', () => {
    test('lenght post should 5', () => {
        let action = addPostActionCreator('test add post')
        let newState = profileReducer(state, action)
        expect(newState.posts.length).toBe(4)
    })
})

describe('after deleting length of messaegs should be decrement', () => {
    test('lenght post should 2', () => {
        let action = deletedPost(1)
        let newState = profileReducer(state, action)
        expect(newState.posts.length).toBe(2)
    })
})
describe('add a new post with the correct name', () => {
    test('new post', () => {
        let action = addPostActionCreator('new post name')
        let newState = profileReducer(state, action)
        let len = newState.posts.length - 1
        expect(newState.posts[len].post).toBe('new post name')
    })
})

