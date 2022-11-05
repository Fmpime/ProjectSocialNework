import React from "react";
import { connect } from "react-redux";
import DialogContainer from "./dialogs/DialogContainer";
import MessageContainer from "./message/MessageContainer";
import classes from "./Messages.module.css";

import { authNavigateHOC } from "../../../hoc/AuthNavigate";



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

  const redirectContainer = authNavigateHOC(Messages)
export default connect(null,{})(redirectContainer);
