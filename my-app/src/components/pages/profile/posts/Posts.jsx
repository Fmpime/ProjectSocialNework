import React from "react";
import NewPost from "./newpost/NewPost";
import PostItem from "./postitem/PostItem";
import classes from "./Posts.module.css";
const Posts = (props) => {
  
  return (
    <div className={classes.posts}>
      <NewPost />
      {props.postItemData.map(post=>{ return <PostItem  postItemData={post.id} content={post.content} heading={post.heading} likes={post.likes}/>})}

    </div>
  );
};

export default Posts;
