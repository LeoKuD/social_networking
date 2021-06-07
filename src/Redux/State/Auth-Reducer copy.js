const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false

}

let authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default: return state
    }
}

export const setUserAuthData = (id, login, email) => {
    return {
        type: SET_USER_DATA,
        data: { id, login, email }
    }
}

export default authReducer