import Myposts from './Myposts/Myposts'
import style from './Profile.module.css'
import ProfileInfo from './Profileinfo/ProfileInfo';

const Profile = (props) => {


    return (
        <div>
            <ProfileInfo />
            <Myposts state={props.state} newPost={props.newPost} />
        </div>


    )
}

export default Profile;
