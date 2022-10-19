
import React from 'react';

const MessageInput = (props) => {
    return (
        <textarea cols="30" rows="10" ref={props.inTextArea}></textarea>
    );
}

export default MessageInput;
