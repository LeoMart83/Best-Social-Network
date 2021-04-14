import React from 'react';
import userPhoto from "../../Assets/Images/user.png";
import classes from './Users.module.css';
import {NavLink} from "react-router-dom";


let User = ({user, followingInProgress, unfollow, follow, ...props}) => {

    return <div className={classes.userContainer}>

        <div>
            <NavLink to={'/profile/' + user.id}>
                <img src={user.photos.small != null ? user.photos.small : userPhoto}
                     className={classes.usersPhoto}/></NavLink>
        </div>
        <div>
            {user.followed
                ? <button disabled={followingInProgress.some(id => id === user.id)}
                          onClick={() => {
                              unfollow(user.id)
                          }}>Unfollow</button>
                : <button disabled={followingInProgress.some(id => id === user.id)}
                          onClick={() => {
                              follow(user.id)
                          }}>Follow</button>}
        </div>
        <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                    </span>
                </span>
    </div>
}

export default User;