import React from 'react'
import { connect } from 'react-redux'
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFeatching, unFollow } from '../../Redux/State/Users-Page-Reducer'
import Users from './Users'
import * as axios from 'axios'
import Preloader from '../common/Preloader/Preloader'

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFeatching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFeatching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFeatching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFeatching(false)
            this.props.setUsers(response.data.items)
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
        isFeatching: state.usersPage.isFeatching

    }
}

export default connect(mapStateToProps, {
    follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFeatching
})(UsersContainer)