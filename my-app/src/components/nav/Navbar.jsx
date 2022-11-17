import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";

import classes from "./Navbar.module.css";
class Navbar extends React.Component{

  render(){
  return (
    <nav className={classes.navbar}>
      <Link className={classes.link} to={"/profile/"+ this.props.currentUserId}>
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
    </nav>
  );}
};
const mstp = (state) =>({
  currentUserId: state.auth.data.id
})
export default connect(mstp,{})(Navbar);
