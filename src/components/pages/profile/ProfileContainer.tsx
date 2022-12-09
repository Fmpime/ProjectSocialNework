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
function withRouter(Component: any) {
  function ComponentWithRouterProp(props: JSX.IntrinsicAttributes) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}
type PropsType = {
  router:{params:any}
  getUserProfileThunkAC:(arg:number)=>void
  getStatusThunkAC:(arg:number)=>void
}
class ProfileConainer extends React.Component<PropsType> {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    this.props.getUserProfileThunkAC(userId);
    this.props.getStatusThunkAC(userId);
    console.log(this.props)
  }
  render() {
    return  <Profile profileState={{
      aboutMe: "",
      contacts: {
        skype: "",
        vk: "",
        facebook: "",
        icq: "",
        email: "",
        googlePlus: "",
        twitter: "",
        instagram: "",
        whatsApp: ""
      },
      photos: {
        large: undefined,
        small: undefined
      },
      fullName: "",
      userId: 0,
      lookingForAJob: false,
      lookingForAJobDescription: ""
    }} isFetching={false} loginedUserid={0}
                     setProfileInfoThunkCreator={function (photo: object, aboutMe: string, lookingForAJob: boolean, lookingForAJobDescription: string, fullName: string, userId: number): (dispatch: any) => void {
                       throw new Error("Function not implemented.");
                     }} routrer={{
      location: undefined,
      navigate: undefined,
      params: undefined
    }} {...this.props} />;
  }

}

const mapStateToProps = (state: any) => {
  return {
    profileState: getProfile(state),
    status: getStatus(state),
    loginedUserid: getLoginedUserId(state),
  };
};

export default compose(
    authNavigateHOC,
  connect(mapStateToProps, {
    getUserProfileThunkAC,
    getStatusThunkAC,
    updateStatusThunkAC,
    setProfileInfoThunkCreator,
  })
)(withRouter(ProfileConainer));
