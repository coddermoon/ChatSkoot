import React from 'react';

const MessageBox = ({message,getmessage}) => {
    return (
<div>
            <div className="yourMsg mb-6 flex flex-col ">

                <div className="msgTx inline  max-w-[75%] bg-secondary py-2 rounded-l-xl rounded-tr-xl px-3 ml-auto">{message}</div>
                <span className='text-right'>3 minutes ago</span>

            </div>
            <div className="anotherMsg mb-6 flex flex-col justify-end ">
                <div className="msgTx inline  max-w-[75%]  bg-primary py-2 rounded-r-xl  rounded-tl-xl px-3 mr-auto">{getmessage}</div>
                <span className='text-left'>just now</span>
            </div>
        </div>
        );
};

export default MessageBox;