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
      const socket = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")
      socket.onopen = function(){
          console.log('socket connected')
      }
      socket.onmessage = (e)=>{
          console.log(e.data)
      }
    };
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

