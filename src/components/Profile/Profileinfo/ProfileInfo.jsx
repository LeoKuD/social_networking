import Preloader from '../../common/Preloader/Preloader';
import style from './ProfileInfo.module.css'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../img/user.png'

const ProfileInfo = ({ savePhoto, isOwner, profile, status, updateStatusProfile }) => {

    const photoUpload = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

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
            <div> <img src={profile.photos.large || userPhoto} alt="" /> </div>
            {isOwner && <input type='file' onChange={photoUpload}></input>}
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
