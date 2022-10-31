import React from "react";
import Feching from "../../UI/Fetching/Feching";
import Posts from "./posts/Posts";
import classes from "./Profile.module.css";
import ProfileHeader from "./profileheader/ProfileHeader";
import ProfileInfo from "./profileinfo/ProfileInfo";
const Profile = (props) => {   
  return (
    <div className={classes.content}>
      {props.isFetching===true ?<Feching /> : null}
      <ProfileHeader profileState={props.profileState}/>
      <ProfileInfo profileState={props.profileState}/>
      <Posts/>
    </div>
  );
};

export default Profile;
