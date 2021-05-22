const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

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

let dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newTextMessage
            }
            state.messages.push(newMessage)
            state.newTextMessage = ''
            return state
        case UPDATE_NEW_MESSAGE:
            state.newTextMessage = action.newMessage
            return state
        default: return state
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const updateTextMessageActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE,
        newMessage: text
    }
}
export default dialogReducer