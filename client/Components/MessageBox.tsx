import React from 'react';

const MessageBox = ({ messages, receivedMsg, socket }: {
    messages: any,
    receivedMsg: any,
    socket: any


}) => {

    const senderClass:String = "bg-secondary ml-auto"
    const receiverClass:String = "bg-primary mr-auto"


    return (
        <div>

{
    messages.map((message:any,index:any) =>             <div
    key={index}

    className="yourMsg mb-6 flex flex-col ">


    <div className={`msgTx inline  max-w-[75%] py-2 rounded-l-xl rounded-tr-xl px-3 ${message.fromSelf ? senderClass : receiverClass} `} >
        {message.message}
    </div>
    

</div> )
}


        </div>
    );
};

export default MessageBox;