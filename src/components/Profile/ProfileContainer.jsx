import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { setProfile } from '../../Redux/State/Profile-Page-Reducer'
import { withRouter } from 'react-router'
import { profileAPI } from '../../api/api'

class ProfileComponent extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 17465
        }

        profileAPI.getProfile(userId).then(data => {
            this.props.setProfile(data)
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