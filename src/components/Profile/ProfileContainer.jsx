import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { getProfile, getStatusProfile, updateStatusProfile } from '../../Redux/State/Profile-Page-Reducer'
import { withRouter } from 'react-router'
import { compose } from 'redux'

class ProfileComponent extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.autorizedUserId
            if (!userId) {
                this.props.history.push('/login')

            }
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
        status: state.profilePage.status,
        autorizedUserId: state.auth.id
    }
}

export default compose(
    connect(mapStateToProps, { getProfile, getStatusProfile, updateStatusProfile }),
    withRouter
)(ProfileComponent)