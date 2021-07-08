import Preloader from '../../common/Preloader/Preloader';
import style from './ProfileInfo.module.css'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({ profile, status, updateStatusProfile }) => {

    if (!profile) {
        return <Preloader />
    }
    const object1 = profile.contacts
    let contacts = []
    for (const [key, value] of Object.entries(object1)) {
        contacts.push(key, value)

    }

    return (
        <div className={style.content}>
            <div> <img src={profile.photos.large} alt="" /> </div>
            <ProfileStatusWithHooks status={status} updateStatusProfile={updateStatusProfile} />
            <div>{profile.fullName}</div>
            <div>{profile.aboutMe}</div>
            <div>{contacts.map(c => {
                return <div>{c}</div>
            })
            }</div>
        </div>
    )
}

export default ProfileInfo;
