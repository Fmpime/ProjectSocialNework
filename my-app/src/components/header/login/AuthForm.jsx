import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../UI/button/Button';
import classes from '../Header.module.css'
const AuthForm = (props) => {
    if(props.resultCode===1){
    return (
        <div className={classes.loginblock}>
            
            <Button nameButton='login'/>
            <Button nameButton='registration'/>
        </div>
    );}else if(props.resultCode===0){
    return (
        <div className={classes.loginblock}>
            <Link to={'/profile/'+props.data.id}><b>{props.data.login}</b></Link>
            <Button nameButton='logout'/>
        </div>)}
}

export default AuthForm;
