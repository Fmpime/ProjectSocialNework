import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import classes from './DialogsItem.module.css'
const DialogsItem = (props) => {


        
    
    return (
           <Link className={classes.dialogs__items} to={`/messages/id${props.id}`}><img src="https://bain.design/wp-content/uploads/2014/08/People-Avatar-Set-Rectangular-12.jpg" alt="avatar" /><div>{props.name}</div></Link>       
    );
}

export default DialogsItem;
