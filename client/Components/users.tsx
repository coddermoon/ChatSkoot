

import Image from 'next/image';
import Link from 'next/link';

import React from 'react';

const Users = (user: any,handleSelectedUser:Function) => {
  console.log(handleSelectedUser)
  


  const {name, username}= user.user

    return (
     
      <Link href={`$no{}`}>
      
      <div  onClick={()=>handleSelectedUser(username)}  className='h-20 bg-bgPrimary  gap-5 rounded p-4'>
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

      </Link>
       
    );
       
     
};

export default Users;