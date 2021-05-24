import MypostsConteiner from './Myposts/MypostsConteiner';
import ProfileInfo from './Profileinfo/ProfileInfo';

const Profile = (props) => {


    return (
        <div>
            <ProfileInfo />
            <MypostsConteiner store={props.store} />
        </div>


    )
}

export default Profile;
