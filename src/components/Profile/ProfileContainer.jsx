import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { getProfile, getStatusProfile, updateStatusProfile } from '../../Redux/State/Profile-Page-Reducer'
import { withRouter } from 'react-router'
import { withAuthRedirect } from '../Hoc/withAuthRedirect'
import { compose } from 'redux'

class ProfileComponent extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 17465
        }

        this.props.getProfile(userId)
        this.props.getStatusProfile(userId)

    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatusProfile={this.props.updateStatusProfile} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose(
    connect(mapStateToProps, { getProfile, getStatusProfile, updateStatusProfile }),
    withRouter,
    // withAuthRedirect
)(ProfileComponent)