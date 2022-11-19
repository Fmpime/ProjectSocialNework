import React from 'react';
import classes from './Button.module.css'
const Button = (props) => {
    
    return (
        <button type={props.type} className={classes.btn} onClick={()=>{props.onclick()}}>{props.nameButton}</button> 
    );
}

export default Button;
