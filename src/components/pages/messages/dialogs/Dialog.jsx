import React from 'react';
import DialogsItem from './dialogitem/DialogsItem';
import classes from "../Messages.module.css";
import { withRouter } from '../../../../hoc/WithRouerHOC';


const Dialog = (props) => {
      props.updataDialogThunkCreator()
    return (
        <div className={classes.dialog}>
        {props.dialogsData.map((dialog) => {
          return <DialogsItem key={dialog.id} name={dialog.userName} id={dialog.id} />;
        })}
      </div>
    );
}

export default withRouter(Dialog);
