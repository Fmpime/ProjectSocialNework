import React from "react";
import { connect } from "react-redux";
import {
  getUserProfileThunkAC,
} from "../../../redux/ProfileReducer";
import Profile from "./Profile";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { authNavigateHOC } from "../../../hoc/AuthNavigate";



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
      this.props.getUserProfileThunkAC(userId)}
  render() {
    return (
        <Profile {...this.props} />
    );
  }
  }

const mapStateToProps = (state) => {
  return {
    profileState: state.profile.profile,
  };
};

const redirectContainer= authNavigateHOC(ProfileConainer)


export default connect(mapStateToProps, {
  getUserProfileThunkAC,
})(withRouter(redirectContainer));
