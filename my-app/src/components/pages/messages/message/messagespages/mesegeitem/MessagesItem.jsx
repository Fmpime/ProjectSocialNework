import React from 'react';
import classes from './MessageItem.module.css'

const MessagesPage = (props) => {
    return (
        <div className={classes.messages}>
            {props.message}
        </div>
    );
}

export default MessagesPage;
