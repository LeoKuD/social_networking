import friendsReducer, { addFriendActionCreator, updateNameTextActionCreator } from "./Friends-Page-Reduser"

let state = {
    friends: [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Dima' }
    ],
    textName: 'input name'
}

describe('update friend name', () => {
    test('update friend', () => {

        let action = updateNameTextActionCreator('new name')
        let newState = friendsReducer(state, action)
        expect(newState.textName).toBe('new name')
    })
})