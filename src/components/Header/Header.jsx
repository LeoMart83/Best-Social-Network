import classes from './Header.module.css';
import { NavLink } from "react-router-dom";
import logo from '../../Assets/Images/logo.png'

const Header = (props) => {
    return <header className={classes.header}>
        <img src={logo} className={classes.logo} />
        <p className={classes.networkName}>Best Social Network!</p>
        <div className={classes.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.getLogout}>Logout</button></div>
                : <div><NavLink to={'/login'}>Login</NavLink> / <a href={'https://social-network.samuraijs.com/signUp'} target='_blank'> Register </a></div>} 
        </div>
    </header>
}
export default Header;