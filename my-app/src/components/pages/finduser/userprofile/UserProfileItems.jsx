import React from "react";
import UserProfileItem from "./userprofileitem/UserProfileItem";

const UserProfileItems = ({findUserData,follow,unfollow}) => {
  return (
    <div>
      {findUserData.map((state) => {
        return (
          <div>
            <UserProfileItem  state={state} unfollow={unfollow} follow={follow}/>
          </div>
        );
      })}
      <button></button>
    </div>
  );
};

export default UserProfileItems;
