const ADD_POST = 'ADD-POST'
const UPDATA_POST_TEXT = 'UPDATA-POST-TEXT'

let initialState = {
    posts: [
        { id: 1, post: 'Hi, how are you?', countslike: 15 },
        { id: 2, post: 'Hi, how are you?', countslike: 15 },
        { id: 3, post: 'I am OK', countslike: 30 }
    ],
    textPost: '111111'
}

let profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { id: 4, post: state.textPost, countslike: 0 }],
                textPost: ''
            }
        case UPDATA_POST_TEXT:
            return {
                ...state,
                textPost: action.newText
            }
        default: return state
    }

}
export const addPostActionCreator = () => ({ type: ADD_POST })

export const updatePostActionCreator = (text) => {
    return {
        type: UPDATA_POST_TEXT,
        newText: text
    }
}

export default profileReducer