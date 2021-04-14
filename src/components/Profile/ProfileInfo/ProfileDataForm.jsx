import {createField, Input, Textarea} from "../../Common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import classes from './ProfileInfo.module.css';



const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div className={classes.form}>
        <div><button>save</button></div>
        { error && <div className={classes.formSummaryError}>
            {error}
        </div>
        }
        <div>
            Full name: {createField('Full name', 'fullName', [], Input)}
        </div>
        <div>
            <b>Looking for a job:</b>: {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
        </div>
        <div>
            <b>My professional skills:</b>:
            {createField('My professional skills', 'lookingForAJobDescription', [], Textarea,)}
        </div>
        <div>
            <b>About me:</b>
            {createField('About me', 'aboutMe', [], Textarea, )}
        </div>
        <div>
            <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={classes.contact}>
                <b>{key}: {createField(key, 'contacts.' + key, [], Input)}  </b>
            </div>
        })}
        </div>
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;