import React from "react";
import classes from "./Profile.module.css";
const Profile = () => {
  return (
    <div className={classes.content}>
      <div className={classes.content__head}><img
        style={{borderRadius:'50%',margin:'1em 0 0 1em',zIndex:'1', boxShadow:'0 0 2em'}}
          src="https://bain.design/wp-content/uploads/2014/08/People-Avatar-Set-Rectangular-12.jpg"
          alt="zxc"
        /></div>
      <div>
        <div></div>
      </div>
      <div>
        <div>new post</div>
        <div>
          <div>posts</div>
          <div>
            <div>post 1</div>
            <div>post 2</div>
            <div>post 3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
