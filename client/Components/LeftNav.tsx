import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { HiMenuAlt1 } from "react-icons/hi";
import { RxCrossCircled } from "react-icons/rx";
import Contacts from './Contacts';

const LeftNav = () => {

    const [isOpen, setIsOpen] = useState(true);
   
    const toggle = () => setIsOpen(!isOpen);
    const [selectedUser,setSelectedUser]= useState<any>([])
    const [users,setUsers] = useState<any[]>([])

    useEffect( ()=>{

     axios.get('http://localhost:5000/api/users')
      
      .then(res=>setUsers(res.data))

    },[])

    return (
        <div
      className={`navbar bg-bgSecondary min-h-screen  ${
        isOpen ? "translate-x-[-280px]" : "translate-x-0"
      }  md:translate-x-0 lg:translate-x-0    md:block lg:block fixed z-[999] `}
    >
      {/* toggle bar */}

      <div className="absolute top-4 left-[280px] md:hidden lg:hidden text-white z-[999]">
        <h2 onClick={toggle} className="text-white font-bold text-3xl pointer">
          {isOpen ? <HiMenuAlt1 /> : <RxCrossCircled />}
        </h2>
      </div>

      <nav>
        <div className="profileImg flex gap-6 justify-center w-[280px] py-8">
          <Image width={60} height={60} 
            className="w-[60px] rounded-full border-[4px] border-primary "
            src='/images/avatar.png'
            alt="a"
          ></Image>
          <div>
            <h2 className='text-white text-xl flex-wrap'>Mahamodul Hasan Moon</h2>
          </div>
        </div>

        {/* links */}

        {/* navBar links */}

    <div onClick={toggle} >
      <hr className='text-white mt-3' />
  <div className=' overflow-x-hidden h-[calc(100vh_-_12rem)]  '>
 {
  users.map((user) => <Contacts
  
  key ={user._id}
  user={user}
  setSelectedUser={setSelectedUser}
 

 

  />)
 }
  </div>
    </div>

        {/* footer */}

        <footer className='flex items-center justify-center mt-5'>
          <p className='text-center text-white '>2023 &copy; Mahamodul Hasan Moon</p>
        </footer>


      </nav>
    </div>
    );
};

export default LeftNav;