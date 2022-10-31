import React from "react";
import DialogContainer from "./dialogs/DialogContainer";
import MessageContainer from "./message/MessageContainer";
import classes from "./Messages.module.css";
const Messages = ({store}) => {
  return (
    <div className={classes.messages}>
      <DialogContainer />
      <hr />
      <MessageContainer

      />
    </div>
  );
};
export default Messages;
