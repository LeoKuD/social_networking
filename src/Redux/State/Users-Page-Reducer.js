import { followAPI, usersAPI } from "../../api/api"
import { newObjectInArray } from "../../utilits/object-helpers"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFeatching: false,
    followingInProggress: []

}

let usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: newObjectInArray(state.users, action.userId, 'id', { followed: true })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: newObjectInArray(state.users, action.userId, 'id', { followed: false })
            }

        case SET_USERS:
            return { ...state, users: action.users }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_USER_COUNT:
            return { ...state, totalUsersCount: action.totalCount }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFeatching: action.isFeatching }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProggress: action.isFeatching
                    ? [...state.followingInProggress, action.userId]
                    : state.followingInProggress.filter(id => id != action.userId)
            }
        default: return state
    }
}

export const followAccess = (userId) => ({ type: FOLLOW, userId })
export const unFollowAccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, currentPage: page })
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USER_COUNT, totalCount })
export const toggleIsFeatching = (isFeatching) => ({ type: TOGGLE_IS_FETCHING, isFeatching })
export const toggleIsFollowingProgress = (isFeatching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFeatching, userId })
export default usersReducer

export const requestUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFeatching(true))

        const data = await usersAPI.getUsers(currentPage, pageSize)

        dispatch(toggleIsFeatching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
        dispatch(setCurrentPage(currentPage))

    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {

    dispatch(toggleIsFollowingProgress(true, userId))
    const data = await apiMethod(userId)

    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowingProgress(false, userId))


}

export const unFollow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, followAPI.getUnFollow.bind(followAPI), unFollowAccess)

    }
}

export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, followAPI.getFollow.bind(followAPI), followAccess)

    }
}