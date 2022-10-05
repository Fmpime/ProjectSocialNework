import React from "react";
import classes from './Navbar.module.css'
const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div>Profile</div>
      <div>Message</div>
      <div>News</div>
      <div>Musick</div>
      <div>Settings</div>
    </nav>
  );
};

export default Navbar;
