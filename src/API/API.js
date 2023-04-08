import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: { "API-KEY": "306c848a-cbda-42a3-b3ae-45f5480eb7b0" },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const usersAPI = {
    getUsers(pageNumber = 1, pageSize = 10) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then((response) => {
                return response.data
            })
    },
    followUsers(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollowUsers(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
            .then((response) => {
                return response.data
            })
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
            .then((response) => {
                return response.data
            })
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, { status })
            .then((response) => {
                return response.data
            })
    },
    savePhoto(file) {
        const formData = new FormData()
        formData.append('image',file);
        return instance.put(`profile/photo/`, formData)
    },
    saveProfile(profile) {
        return instance.put(`profile/`, profile)
    },
}

export const authAPI = {
    getAuthData() {
        return instance.get(`auth/me`,).then((response) => {
            return response.data
        })
    },
    login(email,password,rememberMe,captcha = null){
        return instance.post('auth/login', {email,password,rememberMe,captcha}).then((response) =>{
            return response.data
        })
    },
    logout(){
        return instance.delete('auth/login').then((response) =>{
            return response.data
        })
    }
}

export const securityAPI = {
    getCaptcha() {
        return instance.get(`security/get-captcha-url`)
    },
    
}




