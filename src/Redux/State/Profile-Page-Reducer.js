import { profileAPI } from '../../api/api'
const ADD_POST = 'ADD-POST'
const UPDATA_POST_TEXT = 'UPDATA-POST-TEXT'
const SET_PROFILE = 'SET_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    posts: [
        { id: 1, post: 'Hi, how are you?', countslike: 15 },
        { id: 2, post: 'Hi, how are you?', countslike: 15 },
        { id: 3, post: 'I am OK', countslike: 30 }
    ],
    textPost: '111111',
    profile: null,
    status: ''
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
        case SET_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_STATUS: {
            return { ...state, status: action.status }
        }
        default: return state
    }

}
export const addPostActionCreator = () => ({ type: ADD_POST })
export const setProfile = (profile) => ({ type: SET_PROFILE, profile })
export const updatePostActionCreator = (text) => {
    return {
        type: UPDATA_POST_TEXT,
        newText: text
    }
}
export const getStatus = (status) => ({ type: SET_STATUS, status })

export default profileReducer

export const getProfile = (UserId) => {
    return (dispatch) => {
        profileAPI.getProfile(UserId).then(data => {
            dispatch(setProfile(data))
        })
    }
}

export const getStatusProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(status => {
            dispatch(getStatus(status))
        })
    }
}
export const updateStatusProfile = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(data => {
            if (data.resultcode === 0) {
                dispatch(getStatus(status))
            }
        })
    }
}