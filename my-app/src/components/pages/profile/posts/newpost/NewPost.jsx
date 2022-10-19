import React from "react";
import Button from "../../../../UI/button/Button";

import classes from "./NewPost.module.css";
<<<<<<< HEAD



const NewPost = (props) => {
=======
const NewPost = (props) => {

>>>>>>> 13df775fae716b50a420ad7c160450bd33bd1cea
    const newPostMessageElement = React.createRef()
    const newPostHeadingElement = React.createRef()
    const addPost = () =>{
      
      props.addPost()
      
    }
    const updaterHeadF=()=>{
      let heading = newPostHeadingElement.current.value
<<<<<<< HEAD
      props.updaterHeadF(heading)
=======
      props.updaterHead(heading)
>>>>>>> 13df775fae716b50a420ad7c160450bd33bd1cea
    
    }
    const updaterContentF=()=>{
      let content = newPostMessageElement.current.value
<<<<<<< HEAD
      props.updaterContentF(content)
=======
      props.updaterContent(content)
>>>>>>> 13df775fae716b50a420ad7c160450bd33bd1cea
    }

    
  return (
    <div className={classes.new__post}>
      <form>
        <p>Create new post!</p>
        <input
          type="text"
          placeholder="heading"
          ref={newPostHeadingElement}
          className={classes.text__head}
          value={props.newPostHead}
          onChange={updaterHeadF}
        />
        <textarea
          placeholder="Write something here..."
          cols="80"
          rows="10"
          name="a"
          ref={newPostMessageElement}
          className={classes.text__area}
          value={props.newPostContent}
          onChange={updaterContentF}
        />
        <Button nameButton='Send post' onclick={addPost} />
      </form>
    </div>
  );
};

export default NewPost;
