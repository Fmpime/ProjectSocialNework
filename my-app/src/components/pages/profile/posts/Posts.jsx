import React from "react";
import NewPostContainer from "./newpost/NewPostContainer";
import PostItem from "./postitem/PostItem";
import classes from "./Posts.module.css";
const Posts = ({store}) => {
  return (
    <div className={classes.posts}>
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
          />
        );
      })}
    </div>
  );
};

export default Posts;
