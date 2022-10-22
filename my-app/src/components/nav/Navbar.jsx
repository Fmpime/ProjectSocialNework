import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import NavbarFriendsContainer from "./navbarfriends/NavbarFriendsContainer";
const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <Link className={classes.link} to="/profile">
        <div>Profile</div>
      </Link>
      <Link className={classes.link} to="/messages">
        <div>Message</div>
      </Link>
      <Link className={classes.link} to="/news">
        <div>News</div>
      </Link>
      <Link className={classes.link} to="/music">
        <div>Music</div>
      </Link>
      <Link className={classes.link} to="/settings">
        <div>Settings</div>
      </Link>
      <Link className={classes.link} to="/findusers">
        <div>Find users</div>
      </Link>
      
      <NavbarFriendsContainer/>
    </nav>
  );
};
export default Navbar;
