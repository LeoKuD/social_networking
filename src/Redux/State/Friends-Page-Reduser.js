const ADD_NAME = 'ADD-NAME'
const UPDATA_NAME_TEXT = 'UPDATA-NAME-TEXT'

let initialState = {
    friends: [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Dima' }
    ],
    textName: 'input name'
}

let friendsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NAME:
            let friends = {
                id: 4,
                name: state.textName
            }
            return {
                ...state,
                friends: [...state.friends, friends],
                textName: ''
            }
        case UPDATA_NAME_TEXT:
            return {
                ...state,
                textName: action.newTextName
            }

        default: return state
    }

}

export const addFriendActionCreator = () => ({ type: ADD_NAME })

export const updateNameTextActionCreator = (text) => {
    return {
        type: UPDATA_NAME_TEXT,
        newTextName: text
    }
}

export default friendsReducer