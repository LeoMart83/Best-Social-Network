import React from 'react';
import {Field, reduxForm} from "redux-form";
import {getLogin} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Input} from "../Common/FormsControls/FormsControls";
import {required} from "../utils/validators/validators";
import {Redirect} from "react-router";
import classes from '../Common/FormsControls/FormsControls.module.css'

const LoginForm = ({handleSubmit, error}) => {
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
        props.getLogin(formData.email, formData.password);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}
        />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps,{getLogin})(Login);