import React, { useState } from "react";
import { Route, Router } from "react-router-dom";
import Dialog from "./dialogs/Dialog";
import Message from "./message/Message";
import classes from "./Messages.module.css";
const Messages = ({state}) => {
  return (
    <div className={classes.messages}>
      <Dialog dialogsData={state.dialogsData}/>
      <hr />
      <Message messageData={state.messageData} myId={state.myId}/>
    </div>
  );
};
export default Messages;
