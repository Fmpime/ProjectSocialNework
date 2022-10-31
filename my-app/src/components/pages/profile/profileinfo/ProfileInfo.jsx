import React from "react";
import classes from "./ProfileInfo.module.css";
const ProfileInfo = (props) => {
  return (
    <div className={classes.profile__info}>
      <div className={classes.discription__block}>{props.profileState.aboutMe}</div>
      {props.profileState.lookingForAJob===true?<div className={classes.discription__block}>{props.profileState.lookingForAJobDescription}</div>:null}
      
    </div>
  );
};

export default ProfileInfo;
