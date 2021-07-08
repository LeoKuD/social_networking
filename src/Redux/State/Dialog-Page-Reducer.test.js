import dialogReducer, { addMessageActionCreator } from "./Dialog-Page-Reducer"

let initialState = {
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
}

describe('test dialogReducer', () => {
    test('add new message', () => {
        let action = addMessageActionCreator('new message')
        let newState = dialogReducer(initialState, action)
        expect(newState.messages[4].message).toBe('new message')
    })
})