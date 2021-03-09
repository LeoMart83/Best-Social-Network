import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={classes.header}>
        <img src='https://cdn.logo.com/hotlink-ok/logo-social.png' /> <div className={classes.mainName}> Best Social Network! </div>
        <div className={classes.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.getLogout}>Logout</button></div>
        : <NavLink to={'/login'}>Login</NavLink>}
            </div>
    </header>
}
export default Header;