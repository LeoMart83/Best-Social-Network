import classes from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import user from '../../../Assets/Images/user.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


const ProfileInfo = ({profile, status, updateStatus, }) => {
    if (!profile) {
        return <Preloader />

    }

    return (
        <div>
            <div className={classes.descriptionBlock}>
                <img src={profile.photos.large ? profile.photos.large : user} className={classes.profilePicture}/>
                <div>{profile.fullName} </div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}
export default ProfileInfo;