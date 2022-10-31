import React from 'react';
import Button from '../../UI/button/Button';
import classes from '../Header.module.css'
const AuthForm = (props) => {
    if(props.resultCode===1){
    return (
        <div className={classes.loginblock}>
            <Button nameButton='login'/>
            <Button nameButton='registration'></Button>
        </div>
    );}else if(props.resultCode===0){
    return (
        <div className={classes.loginblock}>
            <span>{props.data.login}</span>
            <Button nameButton='logout'/>
        </div>)}
}

export default AuthForm;
