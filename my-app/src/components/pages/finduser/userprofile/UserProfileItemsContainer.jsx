import { connect } from "react-redux";
import {
  fetchingRegulatorActionCreator,
  followActionCreator,
  setCurrenPageActionCreator,
  setUserActionCreator,
  setUsersTotalCountActionCreator,
  unfollowActionCreator,
} from "../../../../redux/FindUserReducer";
import React from "react";
import UsersProfileItems from "./userprofileitem/UsersProfileItems";
import Feching from "../../../UI/Fetching/Feching";
import { follow, getUsers, unfollow } from "../../../../API/Api";







class UserProfileItemsClass extends React.Component {
  componentDidMount() {
    this.props.fetchingRegulator(true);
    getUsers(this.props.currentPage,this.props.pageSize)
      .then((data) => {
        this.props.fetchingRegulator(false);
        this.props.setUsers(data.items);
        this.props.setTotalCount(data.totalCount);
      });
      
      
  }
  onFollowStatus(id){
    follow(id)
    .then((data)=>{
      if(data.resultCode===0){
        this.follow(id)
      }
    })

  }
  onUnFollowStatus(id){
    unfollow(id)
    .then((data)=>{
      if(data.resultCode===0){
        this.unfollow(id)
      }
    })
  }
  onsetCurrenPageFunc = (p) => {
    this.props.fetchingRegulator(true);
    this.props.setCurrenPage(p);
    getUsers(p,this.props.pageSize)
      .then((data) => {
        this.props.fetchingRegulator(false);
        this.props.setUsers(data.items);
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
})(UserProfileItemsClass);
