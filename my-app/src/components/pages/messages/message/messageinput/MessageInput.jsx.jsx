import { Field, Form, Formik } from "formik";
import React from "react";

const MessageInput = (props) => {
  return (
    <Formik
      initialValues={{
        message: "",
      }}
    >
      {(formik) => (
        <Form>
          <Field
            style={{
              display: "block",
              all: "unset",
              width: "45em",
              height: "4em",
              border: "2px solid teal",
              margin: "1em auto",
            }}
            value={props.newMessage}
            name="message"
            onChange={updaterMessage}
          />
          <Button onclick={addMessage} nameButton="Send message" />
        </Form>
      )}
    </Formik>
  );
};

export default MessageInput;
