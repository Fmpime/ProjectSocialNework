import React from "react";
import Message from "./Message";
import {
  addMessageActionCreator,
  ubtaterMessageActionCreator,
} from "../../../../redux/MessageReducer";
import { connect } from "react-redux";



const mapStateToProps = (state) =>{
  return{
      myId: state.messages._myId,
      messagesData:state.messages._messageData,
      newMessage: state.messages._newMessage,
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    addMessage:() =>{dispatch(addMessageActionCreator());},
    updaterMessage:(message)=>{dispatch(ubtaterMessageActionCreator(message));},
  }
}

const MessageContainer = connect(mapStateToProps,mapDispatchToProps)(Message)

export default MessageContainer;