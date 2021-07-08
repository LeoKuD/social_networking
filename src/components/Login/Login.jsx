import React from 'react'
import { connect } from 'react-redux'
import { LoginForm } from './LoginForm'
import { login } from '../../Redux/State/Auth-Reducer'
import { Redirect } from 'react-router';

const Login = ({ isAuth, error, login }) => {


    if (isAuth) {
        return <Redirect to='/profile' />
    }

    return <div>
        <h1>Login</h1>
        <LoginForm error={error} login={login} />
    </div>
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        error: state.auth.loginError
    }
}

export default connect(mapStateToProps, { login })(Login)