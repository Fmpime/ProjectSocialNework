import React, {useState} from "react";
import DialogsItem from "./dialogs/DialogsItem";
import classes from "./Messages.module.css";
import MessagesPage from "./messagespages/MessagesPage";

const Messages = () => {
  
  return (
    <div className={classes.messages}>
      <div className={classes.dialog}>
      <DialogsItem  id='1' name='asdasdasd'/>
      <DialogsItem  id='2' name='koolfos;o'/>
      <DialogsItem  id='3' name='gtrgtgrtg'/>
      <DialogsItem  id='4' name='qfqefefefe'/>
      <DialogsItem  id='5' name='fffffffff'/>
      </div>
      <hr/>
      <div className={classes.messages__block}>
        <MessagesPage message="daje ne slichno" />
        <MessagesPage message="daje ne vidno" />
        <MessagesPage message="dalche bejat" />
        <MessagesPage message="sirotkin top" />
      </div>
    </div>
  );
};

export default Messages;
