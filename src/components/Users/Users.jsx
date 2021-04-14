import React from 'react';
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";
import classes from './Users.module.css'


let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {


    return <div className={classes.usersContainer}>

            <Paginator currentPage={currentPage} totalUsersCount={totalUsersCount} pageSize={pageSize}
                       onPageChanged={onPageChanged}
            />

        <div className={classes.userContainer}>
            {
                users.map(u => <User user={u}
                                     key={u.id}
                                     followingInProgress={props.followingInProgress}
                                     follow={props.follow}
                                     unfollow={props.unfollow}
                />)
            }
        </div>
    </div>
}

export default Users;