import { authAPI } from '../../api/api'

const SET_USER_DATA = 'SET_USER_DATA'
const SET_USER_ERROR_DATA = 'SET_USER_ERROR_DATA'

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    loginError: null

}

let authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case SET_USER_ERROR_DATA:
            return {
                ...state, loginError: action.loginError
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
export const setUserAuthErrorData = (loginError) => {
    return {
        type: SET_USER_ERROR_DATA,
        loginError: loginError
    }
}

export default authReducer



export const setAuth = () => (dispatch) => {

    return authAPI.getAuth().then(data => {
        if (data.resultCode === 0) {
            let { id, login, email } = data.data
            dispatch(setUserAuthData(id, login, email, true))
        }
    })

}


export const login = (email, password, isRemmember) => {
    return (dispatch) => {

        authAPI.login(email, password, isRemmember).then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuth())
            }
            else if (data.resultCode === 1) {
                let loginError = data.messages[0]
                dispatch(setUserAuthErrorData(loginError))
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


