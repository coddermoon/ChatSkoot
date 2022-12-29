import Image from 'next/image';
import React from 'react';

const TopNav = ({appUser,selectedUser}) => {
  
 const {name} = selectedUser
    return (
        <div className='shadow-2xl z-20 '>
            <div className="flex justify-between items-center mx-16">
                <div>
                <div className='h-20 bg-bgPrimary  gap-5 rounded p-4'>
          <div className="profile flex gap-2 justify-center items-center overflow-hidden">
          <Image width={20} height={20} 
            className="w-[50px] rounded-full border-[4px] border-primary"
            src='/images/avatar.png'
            alt="a"
          ></Image>
          <div>
            <p className='text-white sm:text-md'>{name}</p>
            <p className=' text-sm text-secondaryWhite'>Active now</p>
          </div>
        </div>
        </div>

                </div>
               
            </div>
        </div>
    );
};

export default TopNav;