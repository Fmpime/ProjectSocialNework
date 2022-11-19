
import React from "react";
import { connect } from "react-redux";
import {logoutThunkCreator} from "../../../redux/AuthReducer"
import AuthForm from "./AuthForm";

class AuthFormContainer extends React.Component {
  componentDidMount() {
  }
  render() {
    return <AuthForm {...this.props.data} logoutThunkCreator={this.props.logoutThunkCreator}  />;
  }
}

const mstp = (state) => {
  return {
    data: state.auth.data,
  };
};

export default connect(mstp, {
  logoutThunkCreator,
})(AuthFormContainer);
