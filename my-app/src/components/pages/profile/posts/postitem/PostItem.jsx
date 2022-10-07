import React from "react";
import classes from "./PostItem.module.css";
const PostItem = () => {
    const a =()=>{
        return Date()
    }
  return (
    <div className={classes.post_item}>
      <img
        src="https://bain.design/wp-content/uploads/2014/08/People-Avatar-Set-Rectangular-12.jpg"
        alt="zxc"
      />
      <div className={classes.text__box}>
        <h4>NickName send:</h4>
      <div className={classes.post__content}>
        <h3>davadvadv</h3>
        <p className={classes.message}>qfveeqeveqvqevqevqevvvvvvvvvvvvqevqevqevqevvkugsufvddddddddddddddddddddddddddddddddddddddddddljfdjhgsdhsdvhvdfhv</p>
        <div className={classes.post__likes}>likes:</div>
        <time>{`${a()}`}</time>
      </div>
      </div>
      
    </div>
  );
};

export default PostItem;
