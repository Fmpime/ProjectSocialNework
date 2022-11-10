import React from "react";
import { connect } from "react-redux";
import DialogContainer from "./dialogs/DialogContainer";
import MessageContainer from "./message/MessageContainer";
import classes from "./Messages.module.css";

import { authNavigateHOC } from "../../../hoc/AuthNavigate";
import { compose } from "redux";



class Messages extends React.Component{
  componentDidMount(){
  }
  render(){
  return (
    <div className={classes.messages}>
      <DialogContainer />
      <hr />
      <MessageContainer/>
    </div>
  )
  }
};

  export default compose(
    connect(null, {}),
    authNavigateHOC,
  )(Messages);

