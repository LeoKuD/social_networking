import { authAPI } from '../../api/api'

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
                ...action.payload
            }

        default: return state
    }
}

export const setUserAuthData = (id, login, email, isAuth) => {
    return {
        type: SET_USER_DATA,
        payload: { id, login, email, isAuth }
    }
}

export default authReducer



export const setAuth = () => {
    return (dispatch) => {

        authAPI.getAuth().then(data => {
            if (data.resultCode === 0) {
                let { id, login, email } = data.data
                dispatch(setUserAuthData(id, login, email, true))
            }
        })
    }
}

export const login = (email, password, isRemmember) => {
    return (dispatch) => {

        authAPI.login(email, password, isRemmember).then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuth())
            }
        })
    }
}

export const logout = () => {
    return (dispatch) => {

        authAPI.logout().then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserAuthData(null, null, null, false))
            }
        })
    }
}


