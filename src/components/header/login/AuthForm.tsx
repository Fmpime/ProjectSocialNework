import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../UI/button/Button';
// @ts-ignore
import classes from '../Header.module.css'
const AuthForm = (props: { isAuth: any; id: string; login: string; logoutThunkCreator: () => void; }) => {
    if(!props.isAuth){
    return (
        <div className={classes.loginblock}>
            <Link to="/login">login|||</Link>
            <Link to="/registration">registration</Link>
        </div>
    )}else{
    return (
        <div className={classes.loginblock}>
            <Link to={'/profile/'+props.id}><b>{props.login}</b></Link>
            <Button onclick={()=>{props.logoutThunkCreator()}} nameButton='logout'/>
        </div>
        )}
}
export default AuthForm;
