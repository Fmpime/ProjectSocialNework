import React from "react";
import Posts from "./posts/Posts";
import classes from "./Profile.module.css";
import ProfileHeader from "./profileheader/ProfileHeader";
const Profile = () => {
  return (
    <div className={classes.content}>
      <ProfileHeader/>
      <Posts/>
    </div>
  );
};

export default Profile;
