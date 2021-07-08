import React from 'react'
import { NavLink } from 'react-router-dom'
import userPhoto from '../../img/user.png'
import style from '../../components/Users/Users.module.css'

export const PictureDusplay = ({ userId, path, smallUserPhoto, altView }) => {
    return (
        <div className={style.userPhoto}>
            <NavLink to={path + userId}>
                <img src={smallUserPhoto != null ? smallUserPhoto : userPhoto} alt={altView} />
            </NavLink>
        </div>
    )
}