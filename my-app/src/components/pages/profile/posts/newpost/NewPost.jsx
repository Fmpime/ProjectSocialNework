import React, {useState} from "react";
import Button from "../../../../UI/button/Button";

import classes from "./NewPost.module.css";
const NewPost = () => {
    // const [postCreator, setPostCreator] = useState([ ])
    const [message, setMessage] = useState(' ');
    const [heading, setHeading] = useState(' ');
    // const postCreatorfunc=()=>{
    //     let newPost=[<PostItem message heading />]
    //     setPostCreator([[...postCreator,newPost]])
    // }
    const setMessFun = (e)=>{
       
         setMessage(e.currentTarget.value)
    
    }
    const setHeadingFun = (e)=>{
       
         setHeading(e.currentTarget.value)
    }
  return (
    <div className={classes.new__post}>
      <form>
        <p>Create new post!</p>
        <input
          type="text"
          placeholder="heading"
          onChange={()=>setHeadingFun()}
          className={classes.text__head}
        />
        <textarea
          placeholder="Write something here..."
          cols="80"
          rows="10"
          name="a"
          onChange={(e)=>setMessFun(e)}
          className={classes.text__area}
        />
        <Button />
      </form>
    </div>
  );
};

export default NewPost;
