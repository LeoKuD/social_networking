import Header from './Header'
import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { setUserAuthData } from '../../Redux/State/Auth-Reducer copy'

class HeaderComponent extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                let { id, login, email } = response.data.data
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
    login: state.auth.login
})

export default connect(mapStateToProps, { setUserAuthData })(HeaderComponent);
