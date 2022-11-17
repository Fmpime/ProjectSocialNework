import React from "react";
import { useState } from "react";
import Feching from "../../UI/Fetching/Feching";
import Posts from "./posts/Posts";
import classes from "./Profile.module.css";
import ProfileHeader from "./profileheader/ProfileHeader";
import ProfileInfo from "./profileinfo/ProfileInfo";
import ProfileRedactor from "./profileinfo/ProfileRedactor/ProfileRedactor";
const Profile = (props) => {
  console.log(props.profileState)
  const [changeProfileMode, setChangeProfileMode] = useState(false);
  return (
    <div className={classes.content}>
      {props.isFetching === true ? <Feching /> : null}
      <ProfileHeader {...props} />
      <ProfileInfo {...props} />
      {changeProfileMode&&props.profileState.userId===props.loginedUserid? (
        <ProfileRedactor
          aboutMe={props.profileState.aboutMe}
          contacts={props.profileState.contacts}
          fullName={props.profileState.fullName}
          lookingForAJob={props.profileState.lookingForAJob}
          lookingForAJobDescription={
            props.profileState.lookingForAJobDescription
          }
          photosSmall={props.profileState.photos.small}
          photosLarge={props.profileState.photos.large}
          userId={props.profileState.userId}
          setChangeProfileMode={setChangeProfileMode}
          setProfilePhotoThunkCreator={props.setProfilePhotoThunkCreator}
        />
      ) 
      :props.profileState.userId===props.loginedUserid?<button style={{margin:"1em 0em 1em 6em"}} onClick={()=>{setChangeProfileMode(true)}}>Change profile</button>:null}
      <Posts />
    </div>
  );
};

export default Profile;
