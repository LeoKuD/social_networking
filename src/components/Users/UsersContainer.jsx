import React from 'react'
import { connect } from 'react-redux'
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFeatching, unFollow, toggleIsFollowingProgress } from '../../Redux/State/Users-Page-Reducer'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import { usersAPI } from '../../api/api'

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFeatching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFeatching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFeatching(true)
        this.props.setCurrentPage(pageNumber)

        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFeatching(false)
            this.props.setUsers(data.items)
        })

    }

    render() {

        return <>
            {this.props.isFeatching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                followingInProggress={this.props.followingInProggress}

            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFeatching: state.usersPage.isFeatching,
        followingInProggress: state.usersPage.followingInProggress

    }
}

export default connect(mapStateToProps, {
    follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFeatching, toggleIsFollowingProgress
})(UsersContainer)