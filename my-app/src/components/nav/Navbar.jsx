import React from "react";
import {Link} from "react-router-dom";
import classes from './Navbar.module.css'
import NavbarFriends from "./navbarfriends/NavbarFriends";
const Navbar = ({state}) => {
  
  return (
    <nav className={classes.navbar}>
       <Link className={classes.link}  to="/profile"> <div >Profile</div></Link>
       <Link className={classes.link}  to="/messages"> <div >Message</div></Link>
       <Link className={classes.link}  to="/news"> <div >News</div></Link>
       <Link className={classes.link}  to="/music"> <div >Music</div></Link>
       <Link className={classes.link}  to="/settings"> <div >Settings</div></Link>
       {state.map((state)=>{ return  <NavbarFriends name={state.name}/>})}
    </nav>
  );
};

export default Navbar;
