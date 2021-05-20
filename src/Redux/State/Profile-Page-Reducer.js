const ADD_POST = 'ADD-POST'
const UPDATA_POST_TEXT = 'UPDATA-POST-TEXT'

let profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                post: state.textPost,
                countslike: 0
            }
            state.posts.push(newPost)
            state.textPost = ''
            return state
        case UPDATA_POST_TEXT:
            state.textPost = action.newText;
            return state
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