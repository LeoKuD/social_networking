const ADD_MESSAGE = 'ADD-MESSAGE'

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
                message: action.data
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newTextMessage: ''
            }

        default: return state
    }
}

export const addMessageActionCreator = (data) => {
    return {
        type: ADD_MESSAGE, data
    }
}

export default dialogReducer