import React from 'react';
import DialogsItem from './dialogitem/DialogsItem';
import classes from "../Messages.module.css";
const Dialog = (props) => {
    
    return (
        <div className={classes.dialog}>
        {props.dialogsData.map((dialog) => {
          return <DialogsItem name={dialog._name} id={dialog._id} />;
        })}
      </div>
    );
}

export default Dialog;
