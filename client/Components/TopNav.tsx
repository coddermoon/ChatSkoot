import Image from 'next/image';
import React from 'react';

const TopNav = () => {
    return (
        <div className='shadow-2xl '>
            <div className="flex justify-between items-center mx-16">
                <div>
                <div className='h-20 bg-bgPrimary  gap-5 rounded p-4'>
          <div className="profileImg flex gap-2 justify-center flex-wrap items-center overflow-hidden">
          <Image width={45} height={45} 
            className="w-[50px] rounded-full border-[4px] border-primary"
            src='/images/avatar.png'
            alt="a"
          ></Image>
          <div>
            <h2 className='text-white  flex-wrap'>Mahamodul Hasan Moon</h2>
            <p className=' text-sm text-secondaryWhite  flex-wrap'>Active now</p>
          </div>
        </div>
        </div>

                </div>
                <div>hello</div>
            </div>
        </div>
    );
};

export default TopNav;