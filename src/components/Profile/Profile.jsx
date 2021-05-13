import Myposts from './Myposts/Myposts'
import style from './Profile.module.css'
import ProfileInfo from './Profileinfo/ProfileInfo';

const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <Myposts />
        </div>


    )
}

export default Profile;
