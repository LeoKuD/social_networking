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
    },
    login(email, password, isRemember) {
        return instance.post(`auth/login`, { email, password, isRemember }).then(response => {
            return response.data
        })
    },
    logout() {
        return instance.delete(`auth/login`).then(response => {
            return response.data
        })
    },
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
    },
    getStatus(id) {
        return instance.get('profile/status/' + id).then(response => {
            return response.data
        })
    },
    updateStatus(status) {
        return instance.put('/profile/status/', { status: status }).then(response => {
            return response.data
        })
    }

}