import React from "react";
import Posts from "./posts/Posts";
import classes from "./Profile.module.css";
import ProfileHeader from "./profileheader/ProfileHeader";
import ProfileInfo from "./profileinfo/ProfileInfo";
const Profile = (props) => {
  
  return (
    <div className={classes.content}>
      <ProfileHeader/>
      <ProfileInfo/>
      <Posts postItemData={props.postItemData}/>
    </div>
  );
};

export default Profile;
