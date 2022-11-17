import React from "react";
import { connect } from "react-redux";
import {
  loginThunkCreator,
} from "../../../../redux/AuthReducer";
import Login from "./Login";
class LoginContainer extends React.Component {
  render() {
    return (
      <Login
        loginThunkCreator={this.props.loginThunkCreator}
        isAuth={this.props.isAuth}
        id={this.props.id}
        captchaUrl={this.props.captchaUrl}
      />
    );
  }
}
const mstp = (state) => ({
  isAuth: state.auth.data.isAuth,
  id: state.auth.data.id,
  captchaUrl: state.auth.captcha,
});
export default connect(mstp, { loginThunkCreator })(
  LoginContainer
);
