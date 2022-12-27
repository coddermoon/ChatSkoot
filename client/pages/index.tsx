import Head from 'next/head'
import Image from 'next/image'
import MessageBox from '../Components/MessageBox'


import Sidenav from '../Components/sidenav'
import TopNav from '../Components/TopNav'




export default function Home() {
  return (
    <>
      <Head>
        <title>ChatsSkoot - Realtime Chat application</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main  max-h-screen w-full bg-bgPrimary bg-fixed">
        <Sidenav />
        <main className="main-content relative  min-h-screen w-full md:pl-[280px] lg:pl-[280px]">
          <div className="z-50 relative">
            <div className='chatContainer h-screen grid '>

              <div className="nav text-white">

                {/* topNav sectiopn  */}

<TopNav/>

              </div>
              <div className="chats text-white flex flex-col-reverse px-5 overflow-y-scroll">

<MessageBox/>
<MessageBox/>
<MessageBox/>
<MessageBox/>
<MessageBox/>
<MessageBox/>
<MessageBox/>
<MessageBox/>
<MessageBox/>
<MessageBox/>

              </div>

              <div className="msgBox grid  content-center items-center gap-6  text-white">



                <Image width={70} height={70} src='/images/attachment.png' alt='attachment' />



                <div>
                  <input type="text" className='w-full p-2 rounded outline-none bg-bgSecondary' placeholder="Type a message" />
                </div>

              </div>




            </div>
          </div>
          <div>
            <div className="wave_anim ">
              <div className="wave wave1"></div>
              <div className="wave wave2"></div>
              <div className="wave wave3"></div>
              <div className="wave wave4"></div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
