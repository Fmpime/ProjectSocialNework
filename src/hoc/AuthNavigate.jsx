import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
const mstp=(state)=>{
    return {isAuth: state.auth.data.isAuth}
}
export const authNavigateHOC = (Component) => {
  class NavigateComponent extends React.Component {
    render() {
      if (this.props.isAuth === false) {
        return <Navigate to="/login" />;
      } else {
        return <Component {...this.props} />;
      }
    }
  }
  const ConnectedNavigateComponent = connect(mstp)(NavigateComponent)
  return ConnectedNavigateComponent;
};
