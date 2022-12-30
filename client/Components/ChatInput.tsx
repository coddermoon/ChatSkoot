import React from 'react';

const ChatInput = () => {
    return (
        <form >
        <input type="text" name="msg" className='w-full p-2 rounded outline-none bg-bgSecondary' placeholder="Type a message" />
      </form>
    );
};

export default ChatInput;