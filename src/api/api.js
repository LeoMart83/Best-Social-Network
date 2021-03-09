import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '962551a7-76cc-4a3e-83b1-573b06e829b8'
    },
});

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status` ,{status: status});
    },
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password) {
        return instance.post(`auth/login`, {email, password, rememberMe: true })
    },
    logout() {
        return instance.delete(`auth/login`);
    }

}


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    }
    ,
    follow(userId) {
        return instance.post(`follow/${userId}`)
    }
    ,
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    }
    ,
    getProfile(userId) {
        console.log('Obsolete method, please use profileAPI object')
        return profileAPI.getProfile(userId);
    },
}