import React from "react";
import { connect } from "react-redux";
import {
  getUserProfileThunkAC,
  updateStatusThunkAC,
  getStatusThunkAC,
  setProfileInfoThunkCreator,
} from "../../../redux/ProfileReducer";
import Profile from "./Profile";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { authNavigateHOC } from "../../../hoc/AuthNavigate";
import { compose } from "redux";
import {
  getLoginedUserId,
  getProfile,
  getStatus,
} from "../../../redux/ProfileSeletor";

//custom with router(old code)
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

class ProfileConainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    this.props.getUserProfileThunkAC(userId);
    this.props.getStatusThunkAC(userId);
  }
  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  console.log("mstp");
  return {
    profileState: getProfile(state),
    status: getStatus(state),
    loginedUserid: getLoginedUserId(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    getUserProfileThunkAC,
    getStatusThunkAC,
    updateStatusThunkAC,
    setProfileInfoThunkCreator,
  }),
  authNavigateHOC
)(withRouter(ProfileConainer));
