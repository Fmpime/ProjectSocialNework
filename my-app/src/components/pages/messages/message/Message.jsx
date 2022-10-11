import React from 'react';
import classes from "../Messages.module.css";
import MessagesPage from './messagespages/mesegeitem/MessagesItem';
const Message = (props) => {
    
    return (
        <div className={classes.messages__block}>
        {props.messageData.map((message) => {
          return <MessagesPage message={message.message} />;
        })}
      </div>
    );
}

export default Message;
