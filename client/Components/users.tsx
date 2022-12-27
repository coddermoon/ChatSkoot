

import Image from 'next/image';
import React from 'react';

const Users = (user: any) => {


  const {name, username}= user.user
  console.log(name)
    return (
        <div className='h-20 bg-bgPrimary  gap-5 rounded p-4'>
          <div className="profileImg flex gap-2  flex-wrap items-center overflow-hidden">
          <Image width={50} height={50} 
            className="w-[50px] rounded-full border-[4px] border-primary"
            src='/images/avatar.png'
            alt="a"
          ></Image>
          
          <div>
            <h2 className='text-white  flex-wrap'>{name}</h2>
            <p className=' text-sm text-secondaryWhite  flex-wrap'>{username}</p>
          </div>
        </div>
        </div>
    );
};

export default Users;