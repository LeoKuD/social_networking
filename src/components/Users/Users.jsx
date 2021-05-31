import React from 'react'
import style from './Users.module.css'

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1, followed: true, status: 'i am ok', userName: 'Evgeniy', userLogo: 'https://www.film.ru/sites/default/files/people/1456277-1436872.jpg',
                    location: { city: 'Minsk', country: 'Belarus' }
                },
                {
                    id: 2, followed: false, status: 'i am bad', userName: 'Vadim', userLogo: 'https://www.film.ru/sites/default/files/people/1456277-1436872.jpg',
                    location: { city: 'New York', country: 'USA' }
                },
                {
                    id: 3, followed: false, status: 'i am fine', userName: 'Alena', userLogo: 'https://www.film.ru/sites/default/files/people/1456277-1436872.jpg',
                    location: { city: 'Kiev', country: 'Ukrain' }
                }
            ]
        )
    }

    return <div>
        {props.users.map(u => <div key={u.id}>
            <div className={style.userPhoto}> <img src={u.userLogo} alt="user" />  </div>
            <div>
                {u.followed ? <button onClick={() => { props.unFollow(u.id) }}>Unfollow</button>
                    : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
            </div>
            <div> {u.userName} </div>
            <div> {u.status} </div>
            <div> {u.location.city} </div>
            <div> {u.location.country} </div>
        </div>)}
    </div>
}

export default Users