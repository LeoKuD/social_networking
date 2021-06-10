import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirect = (Component) => {
    class ReadirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) { return <Redirect to='/login' /> }
            return <Component {...this.props} />
        }
    }
    return connect(mapStateToPropsForRedirect)(ReadirectComponent)
}