import React from "react";
import Button from "../../../UI/button/Button";
import classes from "../Messages.module.css";
import MessageInput from "./messageinput/MessageInput.jsx";
import UserMessagesItem from "./messagespages/mesegeitem/UserMessagesItem";
<<<<<<< HEAD
const Message = (props) => {
  console.log(props)
  const inTextArea = React.createRef()
  const addMessage = () =>{
    props.addMessage()
}
  const updaterMessage=()=>{
    let message = inTextArea.current.value
    props.updaterMessage(message)
=======
const Message = (props,{myId}) => {
  const inTextArea = React.createRef()
  const newMessage = ()=>{
    let text =  inTextArea.current.value;
    alert(text)
>>>>>>> 13df775fae716b50a420ad7c160450bd33bd1cea
  }
  return (
    <div>
    <div className={classes.messages__block}>
      {props.messagesData.map((props) => {
        return (
          
          <UserMessagesItem
            message={props._message}
            userId={props._userId}
            myId={props._myId}
          />
        );
      })}
<<<<<<< HEAD
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
=======
      <MessageInput inTextArea={inTextArea} />
      <Button onClick={newMessage} nameButton='Send message'/>
    </div>
>>>>>>> 13df775fae716b50a420ad7c160450bd33bd1cea
  );
};

export default Message;
