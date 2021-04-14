import * as React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getStatus,
    getUserProfile,
    requestPosts,
    savePhoto,
    saveProfile,
    updateStatus
} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = 15340;
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }


    componentDidMount() {
        this.refreshProfile();
        this.props.requestPosts();
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (this.props.match.params.userId !== prevProps.match.params.userId) {
    //         this.refreshProfile();
    //     }
    // }

    render() {
        return (
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}
                     requestPosts={this.props.requestPosts}/>

        )
    }

}

let mapState = (state) => {
    return ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
    })

}

export default compose(
    connect(mapState, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile, requestPosts}),
    withRouter,
    //withAuthRedirect,
)(ProfileContainer);