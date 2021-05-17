import Myposts from './Myposts/Myposts'
import ProfileInfo from './Profileinfo/ProfileInfo';

const Profile = (props) => {


    return (
        <div>
            <ProfileInfo />
            <Myposts progilePage={props.progilePage}
                dispatch={props.dispatch} />
        </div>


    )
}

export default Profile;
