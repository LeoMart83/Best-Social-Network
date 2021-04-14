import classes from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import user from '../../../Assets/Images/user.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import { useState } from "react";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        });

    }


    return (
        <div className={classes.descriptionBlock}>

            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />

            <img src={profile.photos.large ? profile.photos.large : user} className={classes.profilePicture} />
            {isOwner && <div className={classes.photoChange}>Change photo: <input type={'file'} onChange={onMainPhotoSelected} /></div>}
            <hr />


            {editMode
                ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                : <ProfileData goToEditMode={() => {
                    setEditMode(true)
                }} profile={profile} isOwner={isOwner} />}



        </div>
    )
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return <div className={classes.profileInformation}>
        <p>Personal profile information:</p>

        {isOwner && <div>

        </div>}
        <div>
            <b>Full name: </b>{profile.fullName}
        </div>
        <div>
            <b>About me:</b> {profile.aboutMe}
        </div>
        <div>
            <b>Looking for a job:</b> {profile.lookingForAJob ? 'Yes' : 'No'}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>My professional skills:</b> {profile.lookingForAJobDescription}
            </div>
        }

        <div>
            <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                 return profile.contacts[key] ? <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} /> : null 
            })}
        </div>
        <button onClick={goToEditMode}>Edit</button>
    </div>
}


const Contact = ({ contactTitle, contactValue }) => {
    return <div className={classes.contact}><b>{contactTitle}</b>: <a href={contactValue} target='_blank'>{contactValue}</a> </div>
}

export default ProfileInfo;