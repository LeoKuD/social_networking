import Preloader from '../../common/Preloader/Preloader';
import style from './ProfileInfo.module.css'

const ProfileInfo = (props) => {



    if (!props.profile) {
        return <Preloader />
    }
    const object1 = props.profile.contacts
    let contacts = []
    for (const [key, value] of Object.entries(object1)) {
        contacts.push(key, value)

    }

    return (
        <div className={style.content}>
            <div> <img src={props.profile.photos.large} alt="" /> </div>
            <div>{props.profile.fullName}</div>
            <div>{props.profile.aboutMe}</div>
            <div>{contacts.map(c => {
                return <div>{c}</div>
            })
            }</div>
        </div>
    )
}

export default ProfileInfo;
