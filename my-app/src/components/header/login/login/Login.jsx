import React from "react";
import classnames from "classnames";
import { Field, Form, Formik } from "formik";
import classes from "./Form.module.css";
const Login = (props) => {
  const validateEmail=(value)=>{
    if(!value){
        return 'required'
    }else if(!/^[A-Z0-9._%+-]+@[ A-Z0-9.-]+\.[A-Z]{0,9}$/i.test(value)){
        return 'invalid login'
    }
  }
  const validatePass=(value)=>{
    if(!value){
        return 'required'
    }else if(/[@#$%^&*?><,./"]/i.test(value)){
        return 'invalid login'
    }
  }
 
  // const validatePass=()=>{}
  return (
    <div className={classes.login_block}>
      <h1>Login</h1>
      <Formik
        initialValues={{
          password: "",
          email: "",
          rememberMe:false,
        }}
        onSubmit={(loginFormData) => {
          props.loginThunkCreator(loginFormData)
        }}
      >
        {({ errors, touched,isSubmitting}) => (
          <Form>
            <label className={classes.label}>Password:</label>
            <Field
              className={classnames(classes.field, {
                [classes.errorfield]: errors.password && touched.password,
              })}
              placeholder="pass"
              name="password"
              type="password"
              validate={validatePass}
            />
            <label className={classes.label}>Email:</label>
            <Field
              className={classnames(classes.field, {
                [classes.errorfield]: errors.email && touched.email,
              })}
              name="email"
              type="email"
              validate={validateEmail}
              placeholder="email"
            />
            <div>
            <label className={classes.label}>remember me</label>
            <Field
              name="rememberMe"
              type="checkbox"
            />
            </div>
            <button  className={classes.button} type="submit">
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
