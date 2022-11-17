
import Message from "./Message";
import {
  addMessageActionCreator,
} from "../../../../redux/MessageReducer";
import { connect } from "react-redux";



const mapStateToProps = (state) =>{
  return{
      myId: state.messages._myId,
      messagesData:state.messages._messageData,
      
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    addMessage:(message) =>{dispatch(addMessageActionCreator(message));},
  }
}

const MessageContainer = connect(mapStateToProps,mapDispatchToProps)(Message)

export default MessageContainer;