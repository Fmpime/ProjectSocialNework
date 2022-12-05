import React, {useState} from "react";
import classnames from "classnames";
import {Field, Form, Formik} from "formik";
// @ts-ignore
import classes from "./Form.module.css";
import {Navigate} from "react-router-dom";


const Login = (props: {
    isAuth: boolean
    id: string
    loginThunkCreator: (arg0: { password: string; email: string; rememberMe: boolean; captcha: string; }, arg1: React.Dispatch<React.SetStateAction<boolean>>, arg2: React.Dispatch<React.SetStateAction<boolean>>) => void
    captchaUrl: string | undefined;
}) => {
    const [userWasNotFound, setUserWasNotFound] = useState(false);
    const [captcha, setCaptcha] = useState(false);
    if (props.isAuth) {
        return <Navigate to={"/profile/" + props.id}/>;
    }
    const validateEmail = (value: string) => {
        if (!value) {
            return "required";
        } else if (!/^[A-Z0-9._%+-]+@[ A-Z0-9.-]+\.[A-Z]{0,9}$/i.test(value)) {
            return "invalid login";
        }
    };
    const validatePass = (value: string) => {
        if (!value) {
            return "required";
        } else if (/[@#$%^&*?><,./"]/i.test(value)) {
            return "invalid login";
        }
    };

    // const validatePass=()=>{}
    return (
        <div className={classes.login_block}>
            <h1>Login</h1>
            <Formik
                initialValues={{
                    password: "",
                    email: "",
                    rememberMe: false,
                    captcha: "",
                }}
                onSubmit={(loginFormData) => {
                    console.log(loginFormData)
                    props.loginThunkCreator(
                        loginFormData,
                        setUserWasNotFound,
                        setCaptcha
                    );
                }}
            >
                {({errors, touched}) => (
                    <Form className={classes.login_block}>
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
                        <div style={{display: "flex", alignItems: "center"}}>
                            <label className={classes.label}>remember me</label>
                            <Field name="rememberMe" type="checkbox"
                                   style={{height: "2em", width: "2em", border: "2px solid turquoise "}}/>
                        </div>
                        <button className={classes.button} type="submit">
                            Login
                        </button>
                        {userWasNotFound ? (
                            <span style={{color: "red", fontWeight: "bold"}}>
                Account not found
              </span>
                        ) : null}
                        {captcha ? (
                            <div>
                                <img style={{all: "unset"}} src={props.captchaUrl} alt=""/>
                                <Field name="captcha"/>
                                <span style={{color: "red", fontWeight: "bold"}}>
                  enter a captcha!
                </span>
                            </div>
                        ) : null}
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Login;
