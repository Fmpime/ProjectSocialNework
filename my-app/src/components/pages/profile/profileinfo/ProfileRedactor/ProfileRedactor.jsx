import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import classes from "./ProfileRedactor.module.css";
const ProfileRedactor = (props) => {
  const [photo, setPhoto] = useState(null);
  const handle =(e)=>{
    setPhoto(e.target.files[0])
  }
  return (
    <div className={classes.redactor__block}>
      <h2>Profile redactor</h2>
      <Formik
        initialValues={{
          photoLarge:  null,
          photoSmall: null,
          aboutMe: props.aboutMe,
          lookingForAJob: props.lookingForAJob,
          lookingForAJobDescription: props.lookingForAJobDescription,
          fullName: props.fullName,
        }}
        onSubmit={(info) => {
          props.setProfileInfoThunkCreator(photo,info.aboutMe,info.lookingForAJob,info.lookingForAJobDescription,info.fullName,props.userId)
          props.setChangeProfileMode(false)
        }}
      >
        {(formik) => {
          return (
            <Form>
              <label className={classes.label}>Full Name: </label>
              <Field
                className={classes.text__input}
                type="text"
                name="fullName"
              />
              <label className={classes.label}>Avatar: </label>
              <Field
                className={classes.file__input}
                type="file"
                name="photoSmall"
                onChange={handle}
              />
              <label className={classes.label}>Write something about yourself:</label>
              <Field
                className={classes.textarea__input}
                rows="5"
                cols="53"
                as="textarea"
                name="aboutMe"
              />
              <label className={classes.label}>Are you looking for a job?</label>
              <Field
                style={{
                  display:"block",
                  width:"4em",
                  height: "4em",
                  margin: "1em auto",
                }}
                type="checkbox"
                name="lookingForAJob"
              />
              <label className={classes.label}>What kind of job are you looking for?</label>
              <Field
                className={classes.textarea__input}
                rows="5"
                cols="53"
                as="textarea"
                name="lookingForAJobDescription"
              />
              <div>
              <button style={{display:"inline-block", marginLeft:"1em"}} type="submit" >Saved changes</button>
              <button style={{display:"inline-block", marginLeft:"1em"}} onClick={()=>props.setChangeProfileMode(false)}>cancel</button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ProfileRedactor;
