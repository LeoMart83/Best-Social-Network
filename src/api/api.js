import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '962551a7-76cc-4a3e-83b1-573b06e829b8'
    },
});

const postInstance = axios.create({
    baseURL: 'https://fgxgop.deta.dev/',
});


export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile);
        return instance.put(`profile/photo`, formData)
    },
    updateProfile(profile) {
        return instance.put(`profile`, profile);
    },
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe: true, captcha})
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`);
    }
}

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    }
}

export const postsAPI = {
    getPosts(userId) {
        return postInstance.get(`posts/`, {user_id: userId})
    },
    createPost(userId, body) {
        return postInstance.post(`posts/`, {user_id: userId, body: body}
        )
    },
    deletePost(postId) {
        return postInstance.delete(`posts/${postId}`)
    },
}