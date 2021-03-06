import {Redirect} from "react-router";
import * as React from "react";
import {connect} from "react-redux";

let mapStateForRedirect = (state) => ({isAuth: state.auth.isAuth});

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/profile'}/>;
            return <Component {...this.props}/>
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}
