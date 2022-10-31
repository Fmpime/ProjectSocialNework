import { connect } from "react-redux";
import {
  fetchingRegulatorActionCreator,
  followActionCreator,
  followDetectorActionCreator,
  setCurrenPageActionCreator,
  setUserActionCreator,
  setUsersTotalCountActionCreator,
  unfollowActionCreator,
} from "../../../../redux/FindUserReducer";
import axios  from "axios";
import React from "react";
import UsersProfileItems from "./userprofileitem/UsersProfileItems";
import Feching from "../../../UI/Fetching/Feching";
class UserProfileItemsClass extends React.Component {
  componentDidMount() {
    this.props.fetchingRegulator(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.fetchingRegulator(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
      
      
  }
  onFollowStatus(id){
    axios
    .post(`https://social-network.samuraijs.com/api/1.0/follow/`+id, null,{withCredentials: true})
    .then((response)=>{
      if(response.data.resultCode===0){
        this.follow(id)
      }
    })

  }
  onUnFollowStatus(id){
    axios
    .delete(`https://social-network.samuraijs.com/api/1.0/follow/`+id,{withCredentials: true})
    .then((response)=>{
      if(response.data.resultCode===0){
        this.unfollow(id)
      }
    })
  }
  onsetCurrenPageFunc = (p) => {
    this.props.fetchingRegulator(true);
    this.props.setCurrenPage(p);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.fetchingRegulator(false);
        this.props.setUsers(response.data.items);
      });
  };
  render() {
    return (
      <>
        {this.props.isFeteching ? <Feching /> : null}
        <UsersProfileItems
          totalUserCount={this.props.totalUserCount}
          pageSize={this.props.pageSize}
          setUsersFunc={this.setUsersFunc}
          findUserData={this.props.findUserData}
          onsetCurrenPageFunc={this.onsetCurrenPageFunc}
          currentPage={this.props.currentPage}
          follow={this.onFollowStatus.bind(this.props)}
          unfollow={this.onUnFollowStatus.bind(this.props)}
          followDetector={this.props.followDetector}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    findUserData: state.findUser._findUserData,
    totalUserCount: state.findUser.totalUserCount,
    pageSize: state.findUser.pageSize,
    currentPage: state.findUser.currentPage,
    isFeteching: state.findUser.isFetching,
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

export default connect(mapStateToProps, {
  unfollow: unfollowActionCreator,
  follow: followActionCreator,
  setUsers: setUserActionCreator,
  setCurrenPage: setCurrenPageActionCreator,
  setTotalCount: setUsersTotalCountActionCreator,
  fetchingRegulator: fetchingRegulatorActionCreator,
  followDetector:followDetectorActionCreator,
})(UserProfileItemsClass);
