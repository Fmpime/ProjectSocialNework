import React from "react";
import { Form, Formik, Field } from "formik";

import classes from "./NewPost.module.css";

const NewPost = (props) => {
  return (
    <div className={classes.new__post}>
      <p>Create new post!</p>
      <Formik
      initialValues={{
        postHead: "",
        postBody: "",
      }}
      onSubmit={(post,{resetForm}) => {
        props.addPost(post)
        resetForm({
          values: {postHead: "",postBody: "",}
        });
      }}
      >
      {(formik)=>{
      return(
      <Form className={classes.form}>
        <Field
          name='postHead'
          placeholder="heading"
          className={classes.text__head}
        />
        <Field
          placeholder="Write something here..."
          name="postBody"
          as="textarea"
          className={classes.text__area}
        />
        <button type='submit' style={{border:'black solid 2px',width:"20em"}}>Send post</button>
      </Form>
      )}
      }
      </Formik>
    </div>
  );
};

export default NewPost;
