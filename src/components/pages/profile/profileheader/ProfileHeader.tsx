import React from "react";
// @ts-ignore
import classes from "./ProfileHeader.module.css";
const ProfileHeader = (props: { profileState: { photos: { large: string | undefined; small: string | undefined; }; fullName: string;};}) => {
  return (
    <div style={{background:`url('${props.profileState.photos.large}') center black no-repeat`}} className={classes.content__head}>
      <div className={classes.avatar__and__name}>
        <img
          src={props.profileState.photos.small}
          alt="zxc"
        />
        <span>{props.profileState.fullName}</span>
      </div>
    </div>
  );}
  

export default ProfileHeader;
