import React from 'react';
import classes from './FindUser.module.css'
import UserProfileItemsContainer from './userprofile/UserProfileItemsContainer';
const FindUsers = () => {
    return (
        <div className={classes.findUserBlock}>
            <UserProfileItemsContainer/>
        </div>
    );
}

export default FindUsers;
