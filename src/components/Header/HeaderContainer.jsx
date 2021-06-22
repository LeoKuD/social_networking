import Header from './Header'
import React from 'react'
import { connect } from 'react-redux'
import { setAuth } from '../../Redux/State/Auth-Reducer'
import { logout } from '../../Redux/State/Auth-Reducer'

class HeaderComponent extends React.Component {
    componentDidMount() {
        this.props.setAuth()
    }

    render() {

        return <Header {...this.props} />

    }

}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, { setAuth, logout })(HeaderComponent);
