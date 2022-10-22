import React from "react";
import Dialog from "./dialogs/Dialog";
import MessageContainer from "./message/MessageContainer";
import classes from "./Messages.module.css";
const Messages = ({store}) => {
  return (
    <div className={classes.messages}>
      <Dialog dialogsData={store.getState().messages._dialogsData} />
      <hr />
      <MessageContainer

      />
    </div>
  );
};
export default Messages;
