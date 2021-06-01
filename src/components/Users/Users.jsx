import * as axios from 'axios'
import React from 'react'
import style from './Users.module.css'
import userPhoto from '../../img/user.png'

class Users extends React.Component {

    constructor(props) {
        super(props)
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {

            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <div>
            {this.props.users.map(u => <div key={u.id}>
                <div className={style.userPhoto}> <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="user" />  </div>
                <div>
                    {u.followed ? <button onClick={() => { this.props.unFollow(u.id) }}>Unfollow</button>
                        : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
                </div>
                <div> {u.name} </div>
                <div> {u.status} </div>
                <div> {'u.location.city'} </div>
                <div> {'u.location.country'} </div>
            </div>)}
        </div>
    }
}

export default Users