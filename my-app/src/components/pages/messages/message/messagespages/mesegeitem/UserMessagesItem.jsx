import React from 'react';
import classes from './MessageItem.module.css'

const UserMessagesItem = (props) => {
    return (
        
        <div className={classes.messageItem}>
        {props.userId===props.myId ?(<div className={classes.mymessage}>
            You:
        <p>{props.message}</p><img
        src="https://bain.design/wp-content/uploads/2014/08/People-Avatar-Set-Rectangular-12.jpg"
        alt="zxc"
        /></div>
        ):( <div className={classes.friendmessage}><img
            src="https://bain.design/wp-content/uploads/2014/08/People-Avatar-Set-Rectangular-12.jpg"
            alt="zxc"
            />
            {props.message}</div>)}
        </div>
    );
}

export default UserMessagesItem;
