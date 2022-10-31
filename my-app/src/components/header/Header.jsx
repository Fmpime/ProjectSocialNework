import React from "react";
import classes from "./Header.module.css";
import AuthFormContainer from "./login/AuthFormContainer";
const Header = () => {
  return (
    <header className={classes.header}>
      <img
        src="https://e7.pngegg.com/pngimages/929/206/png-clipart-computer-icons-hyperlink-symbol-link-miscellaneous-text.png"
        alt="aboba"
      />
        <AuthFormContainer/>
    </header>
  );
};

export default Header;
