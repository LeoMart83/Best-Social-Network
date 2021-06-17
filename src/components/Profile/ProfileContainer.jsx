import React, { useEffect } from "react";
import Profile from "./Profile";
import { connect, useDispatch } from "react-redux";
import {
    getUserProfile,
    getStatus,
    requestPosts,
    updateProfile,
    updateStatus,
    updateProfilePhoto,
    createPost,
} from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const ProfileContainer = ({ match, profile, status, posts, updateProfile, updateStatus, updateProfilePhoto, isAuth, createPost }) => {
    
    const dispatch = useDispatch();
    const userId = match.params.userId;

    useEffect(() => {
        dispatch(getUserProfile(userId));
        dispatch(getStatus(userId));
    }, [userId]);

    useEffect(() => {
        dispatch(requestPosts(userId))
    }, [userId]);

    return (
        <Profile
            profile={profile}
            status={status}
            posts={posts}
            isOwner={userId}
            updateProfile={updateProfile}
            updateStatus={updateStatus}
            updateProfilePhoto={updateProfilePhoto}
            createPost={createPost}
        />
    )
}

const mapStateToProps = (state) => {
    return ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        posts: state.profilePage.posts,
        isAuth: state.auth.isAuth,
    })

}

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, updateProfilePhoto, updateProfile, createPost, }),
    withRouter,
    //withAuthRedirect,
)(ProfileContainer);