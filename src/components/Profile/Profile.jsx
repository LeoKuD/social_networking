import MypostsConteiner from './Myposts/MypostsConteiner';
import ProfileInfo from './Profileinfo/ProfileInfo';

const Profile = (props) => {


    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MypostsConteiner />
        </div>


    )
}

export default Profile;
