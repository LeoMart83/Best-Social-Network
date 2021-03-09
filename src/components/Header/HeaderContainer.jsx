import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getLogout} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {


    render() {
        return <Header {...this.props}/>
    }
}

const mapState = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapState, {getLogout})(HeaderContainer);