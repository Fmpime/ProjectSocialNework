import React from "react";
import classes from "../Messages.module.css";
import UserMessagesItem from "./messagespages/mesegeitem/UserMessagesItem";
const Message = (props,{myId}) => {
  console.log(props);
  return (
    <div className={classes.messages__block}>
      {props.messageData.map((props) => {
        return (
          
          <UserMessagesItem
            message={props.message}
            userId={props.userId}
            myId={myId}
          />
        );
      })}
    </div>
  );
};

export default Message;
