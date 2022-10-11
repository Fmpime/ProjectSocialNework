import React, { useState } from "react";
import Dialog from "./dialogs/Dialog";
import Message from "./message/Message";
import classes from "./Messages.module.css";
const Messages = (props) => {

  return (
    <div className={classes.messages}>
      <Dialog dialogsData={props.dialogsData}/>
      <hr />
      <Message messageData={props.messageData}/>
    </div>
  );
};
export default Messages;
