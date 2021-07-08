import { profileAPI } from '../../api/api'
const ADD_POST = 'ADD-POST'
const SET_PROFILE = 'SET_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = ' DELETE_POST'

let initialState = {
    posts: [
        { id: 1, post: 'Hi, how are you?', countslike: 15 },
        { id: 2, post: 'Hi, how are you?', countslike: 15 },
        { id: 3, post: 'I am OK', countslike: 30 }
    ],
    profile: null,
    status: ''
}

let profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { id: 4, post: action.data, countslike: 0 }],
            }
        case SET_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_STATUS: {
            return { ...state, status: action.status }
        }
        case DELETE_POST: {
            return { ...state, posts: state.posts.filter(p => p.id != action.postId) }
        }
        default: return state
    }

}
export const addPostActionCreator = (data) => ({ type: ADD_POST, data })
export const deletedPost = (postId) => ({ type: DELETE_POST, postId })
export const setProfile = (profile) => ({ type: SET_PROFILE, profile })
export const getStatus = (status) => ({ type: SET_STATUS, status })

export default profileReducer


export const getProfile = (UserId) => async (dispatch) => {
    const data = await profileAPI.getProfile(UserId)
    dispatch(setProfile(data))
}


export const getStatusProfile = (userId) => async (dispatch) => {
    const status = await profileAPI.getStatus(userId)
    dispatch(getStatus(status))
}

export const updateStatusProfile = (status) => async (dispatch) => {
    const data = await profileAPI.updateStatus(status)
    if (data.resultcode === 0) {
        dispatch(getStatus(status))
    }
}