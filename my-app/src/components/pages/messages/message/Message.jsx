import React from "react";
import Button from "../../../UI/button/Button";
import classes from "../Messages.module.css";
import UserMessagesItem from "./messagespages/mesegeitem/UserMessagesItem";
const Message = (props) => {
  const inTextArea = React.createRef()
  const addMessage = () =>{
    props.addMessage()
}
  const updaterMessage=()=>{
    let message = inTextArea.current.value
    props.updaterMessage(message)
  }
  return (
    <div>
    <div className={classes.messages__block}>
      {props.messagesData.map((props) => {
        return (
          
          <UserMessagesItem
            message={props._message}
            userId={props._userId}
            myId={props.myId}
          />
        );
      })}
      </div>
      <textarea
    style={{display:'block',all:'unset',width:'45em',height:'4em',border:'2px solid teal',margin:'1em auto'}}
      cols="90"
      value={props.newMessage}
      rows="5"
      ref={inTextArea}
      onChange={updaterMessage}
    ></textarea>
      <Button onclick={addMessage} nameButton='Send message'/>
      </div>
  );
};

export default Message;
