import React from "react";
// @ts-ignore
import classes from "./../../FindUser.module.css";

import UserProfileItem from "./UserProfileItem";
const UsersProfileItems = (props: { totalUserCount: number; pageSize: number; onsetCurrenPageFunc: (arg0: number) => void; currentPage: number; findUserData: any[]; unfollow: (arg0: number) => void; follow: (arg0: number) => void; buttonDisabler: (arg0: number, arg1: boolean) => void; }) => {
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
              state={state}
              unfollow={props.unfollow}
              follow={props.follow}
              buttonDisabler={props.buttonDisabler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default UsersProfileItems;
