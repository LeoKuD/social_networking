import MypostsConteiner from './Myposts/MypostsConteiner';
import ProfileInfo from './Profileinfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatusProfile={props.updateStatusProfile} />
            <MypostsConteiner />
        </div>


    )
}

export default Profile;
