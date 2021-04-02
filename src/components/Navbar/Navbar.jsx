import classes from './Navbar.module.css';
import { NavLink } from "react-router-dom";
import msg from '../../Assets/Images/msg.svg';
import user from '../../Assets/Images/user.svg';
import users from '../../Assets/Images/users.svg';

const Navbar = (props) => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <img src={user} alt=""/>
                <NavLink to='/profile' activeClassName={classes.activeLink}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <img src={msg} alt=""/>
                <NavLink to='/dialogs' activeClassName={classes.activeLink}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <img src={users} alt=""/>
                <NavLink to='/users' activeClassName={classes.activeLink}>Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/#' >News</NavLink>
            </div>
        </nav>)
}
export default Navbar;