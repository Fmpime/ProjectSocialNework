import React from "react";
import classes from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
const ProfileInfo = (props) => {
  return (
    <div className={classes.profile__info}>
      <div className={classes.discription__block}>
        {props.profileState.aboutMe}
      </div>
      {props.profileState.lookingForAJob === true ? (
        <div className={classes.discription__block}>
          {props.profileState.lookingForAJobDescription}
        </div>
      ) : null}
      <ProfileStatus
        logginedUserid={props.logginedUserid}
        id={props.profileState.userId}
        status={props.status}
        updateStatusThunkAC={props.updateStatusThunkAC}
        getStatusThunkAC={props.getStatusThunkAC}
      />
    </div>
  );
};

export default ProfileInfo;
