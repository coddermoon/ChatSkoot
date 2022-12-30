import Image from 'next/image';
import React from 'react';
import { FaPowerOff } from 'react-icons/fa'
const TopNav = ({ selectedUser }:
    {
        selectedUser: any;
    }) => {

    const { name } = selectedUser

    return (
        <div className='shadow-2xl z-20 '>
            <div className="flex justify-between items-center mx-16">
                <div>
                    <div className=' bg-bgPrimary  gap-5 rounded p-4'>
                        <div className="flex items-center justify-between">
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
                {/* logout button */}
                <div className="logout">
                                <FaPowerOff />
                            </div>

            </div>
        </div>
    );
};

export default TopNav;