import React from "react";
import Message from "./Message";
import {
  addMessageActionCreator,
  ubtaterMessageActionCreator,
} from "../../../../redux/MessageReducer";
const MessageContainer = ({store}) => {
  const addMessage = () => {
    store.dispatch(addMessageActionCreator());
  };
  const updaterMessage = (message) => {
    store.dispatch(ubtaterMessageActionCreator(message));
  };
  return (
    <Message
      myId={store.getState().messages._myId}
      addMessage={addMessage}
      updaterMessage={updaterMessage}
      messagesData={store.getState().messages._messageData}
      newMessage={store.getState().messages._newMessage}
      
    />
  );
};

export default MessageContainer;
