import Myposts from './Myposts/Myposts'
import Post from './Myposts/Posts/Post';
import style from './Profile.module.css'
import ProfileInfo from './Profileinfo/ProfileInfo';

const Profile = () => {

    let posts = [
        { id: 1, post: 'Hi, how are you?', countslike: 15 },
        { id: 1, post: 'I am OK', countslike: 30 }
    ]
    let postsElement = posts.map(
        p => <Post message={p.post} countslike={p.countslike} />
    )
    return (
        <div>
            <ProfileInfo />
            <Myposts postElem={postsElement} />
        </div>


    )
}

export default Profile;
