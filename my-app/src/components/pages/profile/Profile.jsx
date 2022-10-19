import React from "react";
import Posts from "./posts/Posts";
import classes from "./Profile.module.css";
import ProfileHeader from "./profileheader/ProfileHeader";
import ProfileInfo from "./profileinfo/ProfileInfo";
<<<<<<< HEAD
const Profile = ({store}) => {
=======
const Profile = ({ state, addPost,updaterHead,updaterContent }) => {
>>>>>>> 13df775fae716b50a420ad7c160450bd33bd1cea
  return (
    <div className={classes.content}>
      <ProfileHeader />
      <ProfileInfo />
      <Posts
<<<<<<< HEAD
        store={store}
=======
        addPost={addPost}
        state={state}
        updaterHead={updaterHead}
        updaterContent={updaterContent}
>>>>>>> 13df775fae716b50a420ad7c160450bd33bd1cea
      />
    </div>
  );
};

export default Profile;
