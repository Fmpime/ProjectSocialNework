import React from "react";
import NewPostContainer from "./newpost/NewPostContainer";
import PostItem from "./postitem/PostItem";
import classes from "./Posts.module.css";
const Posts = ({store}) => {
  return (
    <div className={classes.posts}>
<<<<<<< HEAD
      <NewPostContainer
        store={store}
      />
      {store.getState().profile.getPostItemData().map((state) => {
        return (
          <PostItem
            likes={state._likes}
            heading={state._heading}
            content={state._content}
            date={state._date}
=======
      <NewPost
        addPost={props.addPost}
        newPostHead={props.state.newPostHead}
        newPostContent={props.state.newPostContent}
        updaterHead={props.updaterHead}
        updaterContent={props.updaterContent}
      />
      {props.state.postItemData.map((props) => {
        return (
          <PostItem
            likes={props.likes}
            heading={props.heading}
            content={props.content}
>>>>>>> 13df775fae716b50a420ad7c160450bd33bd1cea
          />
        );
      })}
    </div>
  );
};

export default Posts;
