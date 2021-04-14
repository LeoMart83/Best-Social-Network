import React from "react";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {compose} from "redux";
import {createPostApi} from "../../../redux/profile-reducer";

const mapStateToProps = (state) => ({
    profilePage: state.profilePage,
})

class MyPostsContainer extends React.Component {



    render() {

        return(
            <MyPosts profilePage={this.props.profilePage}
                     createPostApi={this.props.createPostApi}

            />
        )
    }
}

export default compose(
    connect(mapStateToProps, {createPostApi})
)(MyPostsContainer)