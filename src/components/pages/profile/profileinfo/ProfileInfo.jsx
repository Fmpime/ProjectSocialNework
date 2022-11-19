import React from "react";
import classes from "./ProfileInfo.module.css";
import ProfileStatushook from "./ProfileStatusHook";
const ProfileInfo = (props) => {
  return (
    <div className={classes.profile__info}>
      <ProfileStatushook
        logginedUserid={props.loginedUserid}
        id={props.profileState.userId}
        status={props.status}
        updateStatusThunkAC={props.updateStatusThunkAC}
        getStatusThunkAC={props.getStatusThunkAC}
      />
      <div className={classes.discription__block}>
        {props.profileState.aboutMe}
      </div>
      {props.profileState.lookingForAJob === true ? (
        <div className={classes.discription__block}>
          {props.profileState.lookingForAJobDescription}
        </div>
      ) : null}
    </div>
  );
};

export default ProfileInfo;
