import shortId from "shortid";
import { postsAPI, profileAPI, usersAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const SET_POSTS = 'SET_POSTS';

let initialState = {
    posts: [],
    profile: null,
    status: '',
};



const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: [...action.posts]
            }
        case ADD_POST:
            return {
                ...state,
                posts: [
                    { key: action.postData.key, body: action.postData.body, likes: action.postData.likes },
                    ...state.posts
                ],
            }
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }
        case SET_STATUS:
            return { ...state, status: action.status }
        case DELETE_POST:
            return { ...state, posts: state.posts.filter(p => p.key !== action.postId) }
        case SAVE_PHOTO_SUCCESS:
            return { ...state, profile: { ...state.profile, photos: action.photos } }
        default:
            return state;
    }
}

export const setPosts = (posts) => ({ type: SET_POSTS, posts });
export const addPost = (postData) => ({ type: ADD_POST, postData });
export const setProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });

//Thunks
export const getUserProfile = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfile(userId);
    dispatch(setProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    try {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    } catch (error) {
        window.alert(`Error ${error?.response?.status} occured, ${error?.response?.data?.message}`);
        // Откатить ситуацию
    }
}

// Thunk for updating profile photo
export const updateProfilePhoto = (file) => async (dispatch) => {
    try {
        const response = await profileAPI.savePhoto(file);
        dispatch(savePhotoSuccess(response.data.data.photos));
    } catch (error) {
        window.alert(`Error ${error?.response?.status} occured, ${error?.response?.data?.message}`);
    }
}

// Thunk for updating profile information
export const updateProfile = (profile) => async (dispatch) => {
    try {
        await profileAPI.updateProfile(profile);
        dispatch(getUserProfile(profile.userId));
    } catch (error) {
        window.alert(`Error ${error?.response?.status} occured, ${error?.response?.data?.message}`);
    }
}

// Thunk for getting posts
export const requestPosts = (id) => async (dispatch) => {
    try {
        const response = await postsAPI.getPosts(id);
        dispatch(setPosts(response.data));
    } catch (error) {
        window.alert(`Error ${error?.response?.status} occured, ${error?.response?.data?.message}`);
    }
}

export const createPost = (body) => async (dispatch, getState) => {
    //const userId = getState().auth.userId;
    const userId = 15340;
    const response = await postsAPI.createPost(userId, body);
    dispatch(addPost(response.data));
}

export const deletePostApi = (postId) => async (dispatch) => {
    await postsAPI.deletePost(postId);
    dispatch(deletePost(postId));
}

export default profileReducer;