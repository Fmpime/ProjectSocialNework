import React from 'react';
import classes from './Button.module.css'
const Button = (props) => {
    const clickBtn= ()=>{
        
    }
    return (
        <button type='button' className={classes.btn} onClick={()=>clickBtn()}>Send post</button> 
    );
}

export default Button;
