import { connect } from "react-redux";
import {
  buttonDisablerActionCreator,
  followThunkCreator,
  getUsersThunkCreator,
  setCurrenPageActionCreator,
  setUsersTotalCountActionCreator,
  unfollowThunkCreator,
} from "../../../../redux/FindUserReducer";
import React from "react";
import UsersProfileItems from "./userprofileitem/UsersProfileItems";
import Feching from "../../../UI/Fetching/Feching";
import { compose } from "redux";
import { authNavigateHOC } from "../../../../hoc/AuthNavigate";
import { getCurrentPage, getFindUser, getIsFetching, getPageSize, getTotalUserCount } from "../../../../redux/UserSelectors";

type PropsType = {
  currentPage:number
  pageSize:number
  getUsersThunkCreator:(arg1:number,arg2:number)=>void
  setCurrenPage:(arg:number)=>{}
  isFeteching:boolean
  buttonDisabler:(arg0: number, arg1: boolean)=>void
  totalUserCount:number
  findUserData:[{}]
  follow:(arg:number)=>void
  unfollow:(arg:number)=>void
}


class UserProfileItemsClass extends React.Component<PropsType> {
  componentDidMount() {
    this.props.getUsersThunkCreator(
      this.props.currentPage,
      this.props.pageSize
    );
  }
  onFollowStatus(id: number) {
    this.props.follow(id);
  }
  onUnFollowStatus(id:number) {
    this.props.unfollow(id);
  }
  onsetCurrenPageFunc = (p:number) => {
    this.props.setCurrenPage(p);
    this.props.getUsersThunkCreator(p, this.props.pageSize);
  };
  render() {
    return (
      <>
        {this.props.isFeteching ? <Feching /> : null}
        <UsersProfileItems
          totalUserCount={this.props.totalUserCount}
          pageSize={this.props.pageSize}
          findUserData={this.props.findUserData}
          onsetCurrenPageFunc={this.onsetCurrenPageFunc}
          currentPage={this.props.currentPage}
          follow={this.onFollowStatus.bind(this.props)}
          unfollow={this.onUnFollowStatus.bind(this.props)}
          buttonDisabler={this.props.buttonDisabler.bind(this.props)}
        />
      </>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     findUserData: state.findUser._findUserData,
//     totalUserCount: state.findUser.totalUserCount,
//     pageSize: state.findUser.pageSize,
//     currentPage: state.findUser.currentPage,
//     isFeteching: state.findUser.isFetching,
//   };
// };
const mapStateToProps = (state: any) => {
  return {
    findUserData: getFindUser(state),
    totalUserCount: getTotalUserCount(state),
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
    isFeteching: getIsFetching(state),
  };
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     unfollow: (userId) => {
//       dispatch(unfollowActionCreator(userId));
//     },
//     follow: (userId) => {
//       dispatch(followActionCreator(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUserActionCreator(users));
//     },
//     setCurrenPage: (currenPage) => {
//       dispatch(setCurrenPageActionCreator(currenPage));
//     },
//     setTotalCount: (totalCount) => {
//       dispatch(setUsersTotalCountActionCreator(totalCount));
//     },
//     fetchingRegulator: (isFetching) => {
//       dispatch(fetchingRegulatorActionCreator(isFetching));
//     },
//   };
// };

export default compose(
  authNavigateHOC,
  connect(mapStateToProps, {
    getUsersThunkCreator,
    unfollow: unfollowThunkCreator,
    follow: followThunkCreator,
    buttonDisabler: buttonDisablerActionCreator,
    setCurrenPage: setCurrenPageActionCreator,
    setTotalCount: setUsersTotalCountActionCreator,
  })
)(UserProfileItemsClass);
