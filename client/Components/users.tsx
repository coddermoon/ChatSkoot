import Image from 'next/image';
import React from 'react';

const Users = () => {
    return (
        <div className='h-20 bg-bgPrimary  gap-5 rounded p-4'>
          <div className="profileImg flex gap-2 justify-center flex-wrap items-center overflow-hidden">
          <Image width={50} height={50} 
            className="w-[50px] rounded-full border-[4px] border-primary"
            src='/images/avatar.png'
            alt="a"
          ></Image>
          <div>
            <h2 className='text-white  flex-wrap'>Mahamodul Hasan Moon</h2>
            <p className=' text-sm text-secondaryWhite  flex-wrap'>Mahamodul Hasan Moon</p>
          </div>
        </div>
        </div>
    );
};

export default Users;