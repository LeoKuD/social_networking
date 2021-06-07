import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { setProfile } from '../../Redux/State/Profile-Page-Reducer'
import { withRouter } from 'react-router'

class ProfileComponent extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setProfile(response.data)
        })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let WithRouterContainerData = withRouter(ProfileComponent)

export default connect(mapStateToProps, { setProfile })(WithRouterContainerData)