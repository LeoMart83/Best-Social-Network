import React, { useRef } from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import user from '../../../Assets/Images/user.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import { useState } from "react";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({ profile, status, updateStatus, updateProfilePhoto, isOwner, updateProfile }) => {

    const [editMode, setEditMode] = useState(false);
    const inputFile = useRef(null);

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            updateProfilePhoto(e.target.files[0]);
        }
    };

    const onSubmit = (formData) => {
        updateProfile(formData).then(() => {
            setEditMode(false);
        });
    };

    const onPhotoClick = () => {
        inputFile.current.click();
    };

    const ProfileInfo = () => {
        return (<>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            <div className={classes.descriptionBlock}>

                <div className={classes.profilePictureWrapper} onClick={() => onPhotoClick()}>
                    <img src={profile.photos.large ? profile.photos.large : user} className={classes.profilePicture} />
                </div>

                <div className={classes.profileInfoWrapper}>
                    <div className={classes.photoChange}>Change photo: <input type={'file'} ref={inputFile} onChange={onMainPhotoSelected} /></div>
                    {editMode
                        ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                        : <ProfileData goToEditMode={() => {
                            setEditMode(true)
                        }} profile={profile} isOwner={isOwner} />}
                </div>
            </div>
        </>
        )
    }

    return (profile ? ProfileInfo() : <Preloader />)
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return <div className={classes.profileInformation}>
        <p>Profile info:</p>

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