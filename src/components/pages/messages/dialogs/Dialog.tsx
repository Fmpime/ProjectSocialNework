import React from 'react';
import DialogsItem from './dialogitem/DialogsItem';
// @ts-ignore
import classes from "../Messages.module.css";
import { withRouter } from '../../../../hoc/WithRouerHOC';


const Dialog = (props: { updataDialogThunkCreator: () => void; dialogsData: any[]; }) => {
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
