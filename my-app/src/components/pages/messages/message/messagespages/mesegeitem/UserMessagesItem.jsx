import React from 'react';
import classes from './MessageItem.module.css'

const UserMessagesItem = (props) => {
    return (
        
        <div>
        {props.userId===2 ?(<div className={classes.mymessage}>
        {props.message}<img
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
