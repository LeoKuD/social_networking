import React from 'react'
import { connect } from 'react-redux'
import { follow, unFollow, requestUsers } from '../../Redux/State/Users-Page-Reducer'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import { compose } from 'redux'
import { getCurrentPage, getFollowingInProggress, getIsFeatching, getPageSize, getTotalUsersCount, getUsers, getPortionSize } from '../../Redux/State/users-Selectors'

class UsersContainer extends React.Component {

    componentDidMount() {
        const { currentPage, pageSize } = this.props
        this.props.requestUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber) => {
        const { pageSize } = this.props
        this.props.requestUsers(pageNumber, pageSize)

    }

    render() {
        console.log('RENDER USERS')
        return <>
            {this.props.isFeatching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                followingInProggress={this.props.followingInProggress}
                portionSize = {this.props.portionSize}

            />
        </>
    }
}

let mapStateToProps = (state) => {
    console.log('mapStateToProps USERS')
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFeatching: getIsFeatching(state),
        followingInProggress: getFollowingInProggress(state),
        portionSize: getPortionSize(state)

    }
}

export default compose(
    connect(mapStateToProps, { follow, unFollow, requestUsers })
)(UsersContainer)