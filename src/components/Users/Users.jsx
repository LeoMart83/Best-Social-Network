import React from 'react';
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";


let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {


    return <div>
        <div>
            <Paginator currentPage={currentPage} totalUsersCount={totalUsersCount} pageSize={pageSize}
                       onPageChanged={onPageChanged}
            /></div>
        <div>
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