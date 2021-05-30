const ADD_POST = 'ADD-POST'
const UPDATA_POST_TEXT = 'UPDATA-POST-TEXT'

let initialState = {
    posts: [
        { id: 1, post: 'Hi, how are you?', countslike: 15 },
        { id: 1, post: 'Hi, how are you?', countslike: 15 },
        { id: 1, post: 'I am OK', countslike: 30 }
    ],
    textPost: '111111'
}

let profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                post: state.textPost,
                countslike: 0
            }
            let copyState = { ...state }
            copyState.posts = [...state.posts]
            copyState.posts.push(newPost)
            copyState.textPost = ''
            return copyState
        }
        case UPDATA_POST_TEXT: {
            let copyState = { ...state }
            copyState.textPost = action.newText;
            return copyState
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