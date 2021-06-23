import Header from './Header'
import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../Redux/State/Auth-Reducer'


class HeaderComponent extends React.Component {
    render() {

        return <Header {...this.props} />

    }

}

let mapStateToProps = (state) => ({
    login: state.auth.login
})

export default connect(mapStateToProps, { logout })(HeaderComponent)
