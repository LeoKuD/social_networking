import React from 'react'
import { connect } from 'react-redux'
import { LoginForm } from './LoginForm'
import { login } from '../../Redux/State/Auth-Reducer'
import { Redirect } from 'react-router';

const Login = (props) => {


    if (props.isAuth) {
        return <Redirect to='/profile' />
    }

    return <div>
        <h1>Login</h1>
        <LoginForm error={props.error} login={props.login} />
    </div>
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        error: state.auth.loginError
    }
}

export default connect(mapStateToProps, { login })(Login)