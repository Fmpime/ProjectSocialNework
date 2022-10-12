import React from "react";
import Posts from "./posts/Posts";
import classes from "./Profile.module.css";
import ProfileHeader from "./profileheader/ProfileHeader";
import ProfileInfo from "./profileinfo/ProfileInfo";
const Profile = ({state}) => {
  
  return (
    <div className={classes.content}>
      <ProfileHeader/>
      <ProfileInfo/>
      <Posts postItemData={state.postItemData}/>
    </div>
  );
};

export default Profile;
