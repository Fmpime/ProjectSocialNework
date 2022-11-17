import { Field, Form, Formik } from "formik";
import React from "react";
import classes from "../Messages.module.css";
import UserMessagesItem from "./messagespages/mesegeitem/UserMessagesItem";
const Message = (props) => {
  const addMessage = (message) =>{
    props.addMessage(message)
}
  return (
    <div>
    <div className={classes.messages__block}>
      {props.messagesData.map((props) => {
        return (
          <UserMessagesItem
            message={props._message}
            userId={props._userId}
            myId={props.myId}
          />
        );
      })}
      </div>
      <div>
      <Formik
      initialValues={{
        message: "",
      }}
      onSubmit={(value,{resetForm})=>{
        if(value.message&& value.message.replace(/\s/g,"") !== ""){
        addMessage(value.message)
        resetForm({
          values: {message:"",}
        })}
      }}
    >
      {(formik) => (
        <Form className={classes.form}>
          <Field
            style={{
              all: "unset",
              display: "flex",
              width: "40em",
              height: "4em",
              border: "2px solid teal",
              margin: "1em auto",
              wordWrap: "break-word"
            }}
            name="message"
            as="textarea"
          />
          <button type="submit" nameButton="Send message" >Send Message</button>
        </Form>
      )}
    </Formik>
      </div>
      </div>
  );
};

export default Message;
