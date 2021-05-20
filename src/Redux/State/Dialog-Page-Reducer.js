const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

let dialogReducer = (state, action) => {

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