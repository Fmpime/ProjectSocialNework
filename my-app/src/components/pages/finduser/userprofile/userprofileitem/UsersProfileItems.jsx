import React from "react";
import classes from "./../../FindUser.module.css";
import Button from "../../../../UI/button/Button";
import UserProfileItem from "./UserProfileItem";
const UsersProfileItems = (props) => {
  let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
  let pagesArr = [];
  for (let i = 1; i <= pagesCount; i++) {
    pagesArr.push(i);
  }
  return (
    <div className={classes.user_profile_page}>
      <div className={classes.user_profile_list}>
        {pagesArr.map((e) => {
          return (
            <span
              onClick={() => props.onsetCurrenPageFunc(e)}
              className={
                props.currentPage === e
                  ? classes.default_page + " " + classes.selected_page
                  : classes.default_page
              }
            >
              {e}
            </span>
          );
        })}
      </div>
      <div className={classes.User_profile_box}>
        {props.findUserData.map((state) => {
          return (
            <UserProfileItem
              followDetector={props.followDetector}
              state={state}
              unfollow={props.unfollow}
              follow={props.follow}
            />
          );
        })}
      </div>
      <Button onClick={props.setUsersFunc} nameButton="jxdn"></Button>
    </div>
  );
};

export default UsersProfileItems;
