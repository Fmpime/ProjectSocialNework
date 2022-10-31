import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import {
  fetchingRegulatorActionCreator,
  setUserProfileActionCreaor,
} from "../../../redux/ProfileReducer";
import Profile from "./Profile";
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }

  return ComponentWithRouterProp;
}


class ProfileConainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId
    this.props.fetchingRegilator(true);
    axios
      .get("https://social-network.samuraijs.com/api/1.0/profile/"+userId)
      .then((response) => {
        this.props.fetchingRegilator(false);
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return (
      <>
        <Profile {...this.props} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.profile.isFetching,
    profileState: state.profile.profile,
  };
};

const URLDataContainerComponent = withRouter(ProfileConainer)

export default connect(mapStateToProps, {
  setUserProfile: setUserProfileActionCreaor,
  fetchingRegilator: fetchingRegulatorActionCreator,
})(URLDataContainerComponent);
