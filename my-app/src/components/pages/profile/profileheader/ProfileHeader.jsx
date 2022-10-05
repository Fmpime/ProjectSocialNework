import React from "react";
import classes from "./ProfileHeader.module.css";
const ProfileHeader = () => {
  return (
    <div className={classes.content__head}>
      <div className={classes.avatar__and__name}>
        <img
          src="https://bain.design/wp-content/uploads/2014/08/People-Avatar-Set-Rectangular-12.jpg"
          alt="zxc"
        />
        <span>NickName</span>
      </div>
    </div>
  );
};

export default ProfileHeader;
