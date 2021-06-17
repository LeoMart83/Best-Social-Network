import classes from './Navbar.module.css';
import { NavLink } from "react-router-dom";
import msg from '../../Assets/Images/msg.svg';
import user from '../../Assets/Images/user.svg';
import users from '../../Assets/Images/users.svg';
import { connect } from "react-redux";

const Navbar = ({userId}) => {

    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <img src={user} alt=""/>
                <NavLink to={`/profile/${userId}`} activeClassName={classes.activeLink}>Profile</NavLink>
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

const mapStateToProps = (state) => {
    return ({
        userId: state.auth.userId,
    })
}

export default connect (mapStateToProps, null) (Navbar);