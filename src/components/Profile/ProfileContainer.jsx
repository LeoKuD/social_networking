import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { getProfile } from '../../Redux/State/Profile-Page-Reducer'
import { withRouter } from 'react-router'

class ProfileComponent extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 17465
        }

        this.props.getProfile(userId)
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

export default connect(mapStateToProps, { getProfile })(WithRouterContainerData)