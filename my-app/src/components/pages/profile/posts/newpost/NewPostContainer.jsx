import React from "react";
import {
  addPostActionCreator,
  updaterContentActionCreator,
  updaterHeadActionCreator,
} from "../../../../../redux/ProfileReducer";
import NewPost from "./NewPost";

const NewPostContainer = ({ store }) => {
  console.log(store.getState().profile)
  const addPost = () => {
    store.dispatch(addPostActionCreator());
  };
  const updaterHeadF = (heading) => {
    store.dispatch(updaterHeadActionCreator(heading));
  };
  const updaterContentF = (content) => {
    store.dispatch(updaterContentActionCreator(content));
  };

  return (
    <NewPost
      addPost={addPost}
      updaterHeadF={updaterHeadF}
      updaterContentF={updaterContentF}
      newPostHead={store.getState().profile.getNewPostHead()}
      newPostContent={store.getState().profile.getNewPostContent()}
   
    />
  );
};

export default NewPostContainer;
