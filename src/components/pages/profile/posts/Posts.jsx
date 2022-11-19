import React from "react";
import NewPostContainer from "./newpost/NewPostContainer";
import PostArrowContainer from "./postitem/PostArrowContainer";
import classes from "./Posts.module.css";
const Posts = () => {
  return (
    <div className={classes.posts}>
      <NewPostContainer />
      <PostArrowContainer/>
    </div>
  );
};

export default Posts;
