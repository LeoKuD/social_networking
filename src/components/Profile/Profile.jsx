import Myposts from './Myposts/Myposts'
import ProfileInfo from './Profileinfo/ProfileInfo';

const Profile = (props) => {


    return (
        <div>
            <ProfileInfo />
            <Myposts progilePage={props.progilePage}
                newPost={props.newPost}
                updatePostText={props.updatePostText} />
        </div>


    )
}

export default Profile;
