import React from 'react'
import { NavLink } from 'react-router-dom'
import userPhoto from '../../img/user.png'
import style from './Users.module.css'
import { Paginator } from '../../utilits/Paginator/Paginator'
import { User } from './User'

let Users = ({ totalUsersCount, pageSize, currentPage, onPageChanged, ...props }) => {
    return <div>

        <Paginator totalUsersCount={totalUsersCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChanged={onPageChanged}
        />

        {props.users.map(u => <User user={u}
            followingInProggress={props.followingInProggress}
            unFollow={props.unFollow}
            follow={props.follow}
            key={u.id} />)}
    </div>
}

export default Users