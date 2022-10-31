import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { fetchingRegulatorActionCreator, setUserDataActionCreator } from "../../../redux/AuthReducer";
import AuthForm from "./AuthForm";

class AuthFormContainer extends React.Component {
  componentDidMount() {
    this.props.fetchingRegulator(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        this.props.setUserData(response)
        this.props.fetchingRegulator(false);
      });
  }
  render() {
    return <AuthForm {...this.props.data.data} />;
  }
}

const mstp = (state) => {
  return {
    data: state.auth.data,
  };
};

export default connect(mstp, {
    fetchingRegulator:fetchingRegulatorActionCreator,
    setUserData:setUserDataActionCreator,

})(AuthFormContainer);
