import axios from 'axios';
import Head from 'next/head';
import React from 'react';
import '../styles/form.module.css'


const signup = () => {

    const handleSubmit = async(e) => {
     e.preventDefault()
     
     const form = e.target
     const name = form.name.value 
     const username = form.username.value 
     const email = form.email.value
     const password = form.password.value
     const data = {
        name,email,password,username
     }
// call api to post data

axios.post(`http://localhost:5000/api/auth/signup`,data)
.then(data=> console.log(data))
.catch(err=>console.error(err.message))


    }


    return (
        <>
            <Head>
                <title>ChatsSkoot - Create New User</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                {/* basic form setup */}

<form onSubmit={handleSubmit} className='form' >

<input type="text" name="name" placeholder='type your Name' required /> <br /><br />
<input type="username" name="username" placeholder='type your Name' required /> <br /><br />
<input type="email" name="email" placeholder='type your Email' required /> <br /><br />
<input type="password" name="password" placeholder='type your Password' required /> <br /><br />
<input type="submit" value="Register Now" />


</form>



            </main>
        </>
    );
};

export default signup;