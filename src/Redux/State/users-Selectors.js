// import { createSelector } from "reselect"

// export const getUsersSelector = (users) => {
//     return getUsers(users)
// }

// export const getUsersSelectorSuper = createSelector(getUsersSelector, (users) => {
//     return users.filter(u => true)
// })

export const getUsers = (state) => {
    return state.usersPage.users
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount

}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getIsFeatching = (state) => {
    return state.usersPage.isFeatching
}

export const getFollowingInProggress = (state) => {
    return state.usersPage.followingInProggress
}
export const getPortionSize = (state) => {
    return state.usersPage.portionSize
}