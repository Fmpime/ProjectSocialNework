import React from 'react';
import classes from './Messages.module.css'
const Messages = () => {
    return (
        <div className={classes.messages}>
        <div className={classes.dialog}>
            <div className={classes.dialogs__items + ' ' + classes.active}>dssssssasdas</div>
            <div className={classes.dialogs__items}>qeteqtqet</div>
            <div className={classes.dialogs__items}>dhfghdfghdas</div>
            <div className={classes.dialogs__items}>dcvbcvbcvbcvas</div>
            <div className={classes.dialogs__items}>dsgdfgdfgdfsdas</div>
        </div>
        <hr/>
        <div className={classes.messages__block}>
            <div className={classes.message}>123123123</div>
            <div className={classes.message}>34543534534</div>
            <div className={classes.message}>56567567657</div>
            <div className={classes.message}>789789789789</div>
            <div className={classes.message}>9099898907675</div>
            <div className={classes.message}>765675675</div>
            <div className={classes.message}>543534534</div>
        </div>
        </div>
    );
}

export default Messages;
