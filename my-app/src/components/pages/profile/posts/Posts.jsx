import React from "react";
import NewPost from "./newpost/NewPost";
import PostItem from "./postitem/PostItem";
import classes from "./Posts.module.css";
const Posts = (props) => {
  
  return (
    <div className={classes.posts}>
      <NewPost />
      {props.postItemData.map(post=>{ return <PostItem  post={post}/>})}

    </div>
  );
};

export default Posts;
