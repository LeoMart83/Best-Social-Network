import React from "react";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPost, updateNewPostText} from "../../../redux/profile-reducer";

const mapStateToProps = (state) => ({
    profilePage: state.profilePage,
})

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPost(newPostText));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
