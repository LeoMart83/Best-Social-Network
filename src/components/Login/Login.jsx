import React from 'react';
import {Field, reduxForm} from "redux-form";
import {getLogin} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {createField, Input} from "../Common/FormsControls/FormsControls";
import {required} from "../utils/validators/validators";
import {Redirect} from "react-router";
import classes from '../Common/FormsControls/FormsControls.module.css'

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><Field placeholder={'Email'}
                        validate={[required]}
                        name={'email'}
                        component={Input}/></div>
            <div><Field placeholder={'Password'}
                        type={'password'}
                        validate={[required]}
                        name={'password'}
                        component={Input}/></div>
            <div><Field type={"checkbox"} name={'rememberMe'} component={Input}/>Remember me</div>

            {captchaUrl && <img src={captchaUrl}/> }
            {captchaUrl && createField('Symbols from image', 'captcha', [required], Input, {})}

            { error && <div className={classes.formSummuryError}>
                {error}
            </div> }
            <div>
                <button type='submit'>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login',})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.getLogin(formData.email, formData.password, formData.captcha);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}
                        captchaUrl={props.captchaUrl}
        />
    </div>
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps,{getLogin})(Login);