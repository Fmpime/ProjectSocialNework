import React from 'react';
import classes from './Button.module.css'
const Button = (props) => {
    
    return (
        <button type='button' className={classes.btn} onClick={()=>props.onclick()}>{props.nameButton}</button> 
    );
}

export default Button;
