import React from "react";
import classes from "./MessageItem.module.css";

const UserMessagesItem = (props) => {
  return (
    <div className={classes.messageItem}>
      {props.senderId === props.myId ? (
        <div className={classes.mymessage}>
            <div>
          <h3 className={classes.myNickName}>{props.senderName}</h3>
          <p className={classes.MessageBody}>{props.body}</p>
          </div>
          {props.authUserPhoto?          
          <img  style={{height:"4em",width:"4em"}}
            src={props.authUserPhoto}
            alt="zxc"
          />
          :
          <img  style={{height:"4em",width:"4em"}}
            src={'https://bain.design/wp-content/uploads/2014/08/People-Avatar-Set-Rectangular-12.jpg'}
            alt="zxc"
          
          />}
        </div>
      ) : (
        <div className={classes.friendmessage}>
          <img style={{height:"4em",width:"4em"}}
            src="https://bain.design/wp-content/uploads/2014/08/People-Avatar-Set-Rectangular-12.jpg"
            alt="zxc"
          />
          <div>
          <h3 className={classes.friendNickName}>{props.senderName}</h3>
          <p className={classes.MessageBody}>{props.body}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMessagesItem;
