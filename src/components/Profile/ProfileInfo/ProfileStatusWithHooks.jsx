import React, {useState} from "react";
import classes from './ProfileInfo.module.css';


const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);

    }


    return (
        <div className={classes.profileStatus}>
            {!editMode &&
            <div>
               <b>Status: </b> <span onDoubleClick={() => setEditMode(true)}>{props.status || '-----'}</span>
            </div>}
            {editMode &&
            <div>
                <input onChange={onStatusChange}
                       autoFocus={true}
                       onBlur={() => {
                           setEditMode(false);
                           props.updateStatus(status)
                       }}
                       value={status}/>
            </div>}
        </div>
    )
}

export default ProfileStatusWithHooks;