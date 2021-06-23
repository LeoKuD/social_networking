import { authAPI } from '../../api/api'
import { setAuth } from './Auth-Reducer'

const SET_INITIAL_SACCESS = 'SET_INITIAL_SACCESS'

let initialState = {
    initialized: false

}

let appReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_INITIAL_SACCESS:
            return {
                ...state,
                initialized: true
            }

        default: return state
    }
}

export default appReducer

export const setInitializApp = () => {
    return {
        type: SET_INITIAL_SACCESS
    }
}

export const setInitializedSuccess = () => {
    return (dispatch) => {

        let promise = dispatch(setAuth())
        promise.then(() => {
            dispatch(setInitializApp())
        })

    }
}