import Myposts from './Myposts/Myposts'
import style from './Profile.module.css'

const Profile = () => {
    return (
        <div className={style.content}>
            <div>ava + description</div>
            <Myposts />
        </div>
    )
}

export default Profile;
