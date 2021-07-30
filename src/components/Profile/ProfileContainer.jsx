import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { getProfile, getStatusProfile, updateStatusProfile, savePhoto } from '../../Redux/State/Profile-Page-Reducer'
import { withRouter } from 'react-router'
import { compose } from 'redux'

class ProfileComponent extends React.Component {

    refreshProfile() {
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

    componentDidMount() {
        this.refreshProfile()

    }
    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile()
        }
        // if (this.props.profile.photos != prevProps.profile.photos) {
        //     this.refreshProfile()
        // }

    }

    render() {
        return (
            <Profile {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatusProfile={this.props.updateStatusProfile}
                isOwner={!this.props.match.params.userId}
                savePhoto={this.props.savePhoto}
            />
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
    connect(mapStateToProps, { getProfile, getStatusProfile, updateStatusProfile, savePhoto }),
    withRouter
)(ProfileComponent)