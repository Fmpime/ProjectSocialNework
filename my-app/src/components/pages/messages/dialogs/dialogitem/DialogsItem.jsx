import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import classes from './DialogsItem.module.css'
const DialogsItem = (props) => {


        
    
    return (
        <div>
           <Link className={classes.dialogs__items} to={`/messages/id${props.id}`}><div>{props.name}</div></Link>       
        </div>
    );
}

export default DialogsItem;
