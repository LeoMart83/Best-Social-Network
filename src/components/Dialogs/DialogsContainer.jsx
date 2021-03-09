import React from "react";
import {addMessage} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = {
    addMessage,
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    //withAuthRedirect
)(Dialogs);