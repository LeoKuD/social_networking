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
        case ADD_MESSAGE: {
            let copyState = { ...state }
            let newMessage = {
                id: 5,
                message: state.newTextMessage
            }

            copyState.messages = [...state.messages]
            copyState.messages.push(newMessage)
            copyState.newTextMessage = ''
            return copyState
        }
        case UPDATE_NEW_MESSAGE: {
            let copyState = { ...state }
            copyState.newTextMessage = action.newMessage
            return copyState
        }
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