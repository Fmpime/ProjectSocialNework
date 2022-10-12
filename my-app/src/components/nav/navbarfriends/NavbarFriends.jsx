import React from 'react';
import classes from './NavbarFriends.module.css'
const NavbarFriends = ({name}) => {
    console.log(name)
    return (
        <div className={classes.navbar__friends}>
            <img src="https://bain.design/wp-content/uploads/2014/08/People-Avatar-Set-Rectangular-12.jpg" alt='adadg'/>
            <h4>{name}</h4>
        </div>
    );
}

export default NavbarFriends;
