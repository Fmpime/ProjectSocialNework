import React from "react";
import NewPost from "./newpost/NewPost";
import PostItem from "./postitem/PostItem";
import classes from "./Posts.module.css";
const Posts = () => {
  return (
    <div className={classes.posts}>
      <NewPost/>
      <PostItem/>
      <PostItem/>
      <PostItem/>
    </div>
  );
};

export default Posts;
