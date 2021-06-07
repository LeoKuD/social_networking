import Header from './Header'
import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { setUserAuthData } from '../../Redux/State/Auth-Reducer copy'
import { authAPI } from '../../api/api'

class HeaderComponent extends React.Component {
    componentDidMount() {
        authAPI.getAuth().then(data => {
            if (data.resultCode === 0) {
                let { id, login, email } = data.data
                this.props.setUserAuthData(id, login, email)
            }
        })
    }

    render() {

        return <Header {...this.props} />

    }

}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, { setUserAuthData })(HeaderComponent);
