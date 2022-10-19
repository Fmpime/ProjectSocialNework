import React from "react";
import classes from "./PostItem.module.css";
const PostItem = (props) => {
<<<<<<< HEAD
=======
    const a =()=>{
        return Date()
    }
    
>>>>>>> 13df775fae716b50a420ad7c160450bd33bd1cea
  return (
    <div className={classes.post_item}>
      <img
        src="https://bain.design/wp-content/uploads/2014/08/People-Avatar-Set-Rectangular-12.jpg"
        alt="zxc"
      />
      <div className={classes.text__box}>
        <h4>NickName send:</h4>
      <div className={classes.post__content}>
        <h3>{props.heading}</h3>
        <p className={classes.message}>{props.content}</p>
        <div className={classes.post__likes}>likes:{props.likes}</div>
        <time>{props.date}</time>
      </div>
      </div>
      
    </div>
  );
};

export default PostItem;
