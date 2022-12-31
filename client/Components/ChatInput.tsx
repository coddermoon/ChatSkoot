import React, { useState } from 'react';

const ChatInput = ({handleSend}:{
  handleSend:any,
  
}) => {

  const [message,setMessage]= useState<any>('')
  
// modify and send message

const sendChat:React.FormEventHandler<HTMLFormElement> = (e)=>{
  e.preventDefault();
  if (message.length > 0) {
    handleSend(message);
    setMessage("");
  }
}

    return (
        <form onSubmit={sendChat}>
        <input type="text"
         name="msg"
          className='w-full p-2 rounded outline-none bg-bgSecondary'
          onChange={(e) => setMessage(e.target.value)}
          value={message}
           placeholder="Type a message" />
      </form>
    );
};

export default ChatInput;