import React from 'react'
import { NavLink } from 'react-router-dom'
import userPhoto from '../../img/user.png'
import style from './Users.module.css'

let Users = (props) => {
    let pagesCount = Math.ceil((props.totalUsersCount / 250) / props.pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div className='sad'>
            {pages.map(p => {
                return <span className={props.currentPage === p && style.selectedPage}
                    onClick={() => { props.onPageChanged(p) }} >{p}</span>
            })}
        </div>

        {props.users.map(u => <div key={u.id}>
            <div className={style.userPhoto}>
                <NavLink to={'profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="user" />
                </NavLink>
            </div>
            <div>
                {u.followed ? <button onClick={() => { props.unFollow(u.id) }}>Unfollow</button>
                    : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
            </div>
            <div> {u.name} </div>
            <div> {u.status} </div>
            <div> {'u.location.city'} </div>
            <div> {'u.location.country'} </div>
        </div>)}
    </div>
}

export default Users