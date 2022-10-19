import React from "react";
import Posts from "./Posts";
const PostsContainer = ({store}) => {
  return (
    <Posts 
    newPostHead={store.getState().profile._newPosHead}
    newPostContent={store.getState().profile._newPosContent}
    profile= {store.getState().profile} 
    />
  );
};

export default PostsContainer;
