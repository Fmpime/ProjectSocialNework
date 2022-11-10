
import React from "react";
import { connect } from "react-redux";
import {authMeThunkCreator} from "../../../redux/AuthReducer"
import AuthForm from "./AuthForm";

class AuthFormContainer extends React.Component {
  componentDidMount() {
    this.props.authMeThunkCreator()
  }
  render() {
    return <AuthForm {...this.props.data}  />;
  }
}

const mstp = (state) => {
  return {
    data: state.auth.data,
  };
};

export default connect(mstp, {
  authMeThunkCreator:authMeThunkCreator,
})(AuthFormContainer);
