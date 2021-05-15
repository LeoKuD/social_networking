import Myposts from './Myposts/Myposts'
import style from './Profile.module.css'
import ProfileInfo from './Profileinfo/ProfileInfo';

const Profile = (props) => {


    return (
        <div>
            <ProfileInfo />
            <Myposts state={props.state} />
        </div>


    )
}

export default Profile;
