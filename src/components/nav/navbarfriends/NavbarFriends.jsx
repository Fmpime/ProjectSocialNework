import React from "react";
import classes from "./NavbarFriends.module.css";
const NavbarFriends = ({ dialogsData }) => {
  return (
    <div>
      {dialogsData.map((props) => {
        return (
          <div className={classes.navbar__friends}>
            <img
              src="https://bain.design/wp-content/uploads/2014/08/People-Avatar-Set-Rectangular-12.jpg"
              alt="adadg"
            />
            <h4>{props._name}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default NavbarFriends;
