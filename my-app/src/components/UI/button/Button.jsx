import React from 'react';
import classes from './Button.module.css'
const Button = (props) => {
    
    return (
<<<<<<< HEAD
        <button type='button' className={classes.btn} onClick={props.onclick}>{props.nameButton}</button> 
=======
        <button type='button' className={classes.btn} onClick={()=>props.onclick()}>{props.nameButton}</button> 
>>>>>>> 13df775fae716b50a420ad7c160450bd33bd1cea
    );
}

export default Button;
