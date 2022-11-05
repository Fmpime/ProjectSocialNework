import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../UI/button/Button';
import classes from '../Header.module.css'
const AuthForm = (props) => {
    if(!props.isAuth){
    return (
        <div className={classes.loginblock}>
            <Link to="/login">login|||</Link>
            <Link to="/registration">registration</Link>
        </div>
    )}else{
    return (
        <div className={classes.loginblock}>
            <Link to={'/profile/'+props.data.id}><b>{props.data.login}</b></Link>
            <Button nameButton='logout'/>
        </div>
        )}
}
export default AuthForm;
