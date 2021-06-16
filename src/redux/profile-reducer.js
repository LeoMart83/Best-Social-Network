import shortId from "shortid";
import {postsAPI, profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const SET_POSTS ='SET_POSTS';

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
                    {key: action.postData.key, body: action.postData.body, likes: action.postData.likes},
                    ...state.posts
                ],
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.key !== action.postId)}
        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos}}
        default:
            return state;
    }
}

export const setPosts = (posts) => ({type: SET_POSTS, posts}); // Works with requestPosts

export const addPost = (postData) => ({type: ADD_POST, postData});
export const setProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

//Thunks
export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
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
    } catch(error) {
        //Откатить ситуацию
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }
}


// requestPosts thunk, для получения постов.
export const requestPosts = () => async (dispatch, getState) => {
    //const userId = getState().auth.userId;
    const userId = 15340;
    const response = await postsAPI.getPosts(userId);
    dispatch(setPosts(response.data))
}

export const createPostApi = (body) => async (dispatch, getState) => {
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