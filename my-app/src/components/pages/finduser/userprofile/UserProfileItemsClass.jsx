import React from "react";
import axios from "axios";

import UsersProfileItems from "./userprofileitem/UsersProfileItems";
class UserProfileItemsClass extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
  }
  onsetCurrenPageFunc = (p) => {
    this.props.setCurrenPage(p);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };
  render() {
    let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);
    let pagesArr = [];
    for (let i = 1; i <= pagesCount; i++) {
      pagesArr.push(i);
    }
    return (
      <UsersProfileItems
        setUsersFunc={this.setUsersFunc}
        findUserData={this.props.findUserData}
        pagesArr={pagesArr}
        onsetCurrenPageFunc={this.onsetCurrenPageFunc}
        currentPage={this.props.currentPage}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    );
  }
}

export default UserProfileItemsClass;
