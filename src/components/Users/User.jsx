import React from 'react'
import { NavLink } from 'react-router-dom'
import userPhoto from '../../img/user.png'
import style from './Users.module.css'
import { Paginator } from '../../utilits/Paginator/Paginator'
import { PictureDusplay } from '../../utilits/Paginator/PictureDispalay'

export const User = ({ user, followingInProggress, unFollow, follow, key, ...props }) => {

    return (
        <div key={key}>
            <PictureDusplay
                style={style.userPhoto}
                path={'profile/'}
                userId={user.id}
                srcLogic={user.photos.small != null ? user.photos.small : userPhoto}
                smallUserPhoto={user.photos.small}
                altView={"user"}
            />
            {/* <div className={style.userPhoto}>
                <NavLink to={'profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="user" />
                </NavLink>
            </div> */}
            <div>
                {user.followed ? <button disabled={followingInProggress.some(id => id === user.id)} onClick={() => {
                    unFollow(user.id)
                }}>Unfollow</button>
                    : <button disabled={followingInProggress.some(id => id === user.id)} onClick={() => {
                        follow(user.id)
                    }}>Follow</button>}
            </div>
            <div> {user.name} </div>
            <div> {user.status} </div>
            <div> {'user.location.city'} </div>
            <div> {'user.location.country'} </div>
        </div>
    )

}