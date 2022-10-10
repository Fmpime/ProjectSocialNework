import React from 'react';
import classes from './MessagesPage.module.css'
import { Route,Routes,BrowserRouter } from "react-router-dom";
import DialogForUser from './dialogforuser/DialogForUser';
const MessagesPage = (props) => {
    return (
        <div className={classes.messages}>
            {props.message}
        </div>
    );
}

export default MessagesPage;
