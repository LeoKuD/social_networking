import React from 'react'
import { NavLink } from 'react-router-dom'
import userPhoto from '../../img/user.png'
import style from './Users.module.css'
import * as axios from 'axios'

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
                {u.followed ? <button onClick={() => {
                    axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/` + u.id, {
                        withCredentials: true,
                        headers: { 'API-KEY': '50f928f1-eaf4-46fa-9088-5cc584947944' }
                    }).then(response => {
                        if (response.data.resultCode === 0) {
                            props.unFollow(u.id)
                        }
                    })
                }}>Unfollow</button>
                    : <button onClick={() => {
                        axios.post(`https://social-network.samuraijs.com/api/1.0//follow/` + u.id, {}, {
                            withCredentials: true,
                            headers: { 'API-KEY': '50f928f1-eaf4-46fa-9088-5cc584947944' }
                        }).then(response => {
                            if (response.data.resultCode === 0) {
                                props.follow(u.id)
                            }
                        })
                    }}>Follow</button>}
            </div>
            <div> {u.name} </div>
            <div> {u.status} </div>
            <div> {'u.location.city'} </div>
            <div> {'u.location.country'} </div>
        </div>)}
    </div>
}

export default Users