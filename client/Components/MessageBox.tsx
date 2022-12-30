import React from 'react';

const MessageBox = () => {
    return (
<div>
            <div className="yourMsg mb-6 flex flex-col ">

                <div className="msgTx inline  max-w-[75%] bg-secondary py-2 rounded-l-xl rounded-tr-xl px-3 ml-auto"> veritatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum autem eos fuga, voluptatibus, ipsa explicabo nihil qui modi provident eum aliquam dolorem error ducimus, aut laboriosam sit officiis nulla assumenda?</div>
                <span className='text-right'>3 minutes ago</span>

            </div>
            <div className="anotherMsg mb-6 flex flex-col justify-end ">
                <div className="msgTx inline  max-w-[75%]  bg-primary py-2 rounded-r-xl  rounded-tl-xl px-3 mr-auto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, ipsam. Possimus laboriosam iusto repellat maiores ducimus sapiente in consequuntur ipsum provident et. Quaerat omnis commodi totam eaque eos atque placeat aliquid minima repudiandae id laborum corporis, ipsum laudantium consequuntur at, inventore mollitia fuga voluptates debitis. Commodi quisquam nam porro expedita.</div>
                <span className='text-left'>just now</span>
            </div>
        </div>
        );
};

export default MessageBox;