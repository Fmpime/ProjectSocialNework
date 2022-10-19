import React from 'react';
import classes from './MessageItem.module.css'

const UserMessagesItem = (props) => {
    return (
        
        <div className={classes.messageItem}>
        {props.userId===2 ?(<div className={classes.mymessage}>
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
