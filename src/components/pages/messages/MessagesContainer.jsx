import React from "react";
import { connect } from "react-redux";
import DialogContainer from "./dialogs/DialogContainer";
import MessageContainer from "./message/MessageContainer";
import classes from "./Messages.module.css";

import { authNavigateHOC } from "../../../hoc/AuthNavigate";
import { compose } from "redux";
import { Route, Routes} from "react-router-dom";




class Messages extends React.Component{
  componentDidMount(){
   
  }
  render(){
  return (
    <div className={classes.messages}>
      <DialogContainer/>
      <hr />
      <Routes>
      <Route path="/:userId"
      element={
      <MessageContainer/>}
      />
      </Routes>
    </div>
  )
  }
};

  export default compose(
    connect(null, {}),
    authNavigateHOC,
  )(Messages);

