import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { 'API-KEY': '50f928f1-eaf4-46fa-9088-5cc584947944' }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,).then(response => {
            return response.data
        })

    }
}

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`).then(response => {
            return response.data
        })
    }
}

export const followAPI = {
    getFollow(id) {
        return instance.post(`follow/` + id).then(response => {
            return response.data
        })
    },
    getUnFollow(id) {
        return instance.delete(`follow/` + id).then(response => {
            return response.data
        })
    }
}

export const profileAPI = {
    getProfile(id) {
        return instance.get('profile/' + id).then(response => {
            return response.data
        })
    }
}