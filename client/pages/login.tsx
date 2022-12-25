import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const login = () => {
    const router = useRouter()

const handleSubmit = (event) => {
        event.preventDefault()
     
        const form = event.target
        const username = form.username.value 
        const password = form.password.value
        const data = {username: username, password: password}

        // login authenticaton

        axios.post(`http://localhost:5000/api/auth/login`,data)
.then(data=> {
    const {status,msg} = data.data

    if(!status){
        alert(msg)
    }else{
        alert('successfully logged in')
        router.push('/');
    }

   

})
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
            
            <div className='bg-bgSecondary'>
            <div className="container">
   
    <div className="panel">
        <form className='form' onSubmit={(event)=>handleSubmit(event)}>

        <div className="panel-group">
            <input className="input" type="username" name='username' required />
            <span className="border"></span>
            <label>Username</label>
        </div>

        <div className="panel-group">
            <input className="input" name='password' type="password" required />
            <span className="border"></span>
            <label>Password</label>
        </div>

        <button type="submit">Login</button>

        </form>

        <div className="panel-footer">
            <p><Link href={''} >Forgotten password?</Link></p>
            <p>Not a member? <Link href="/signup">Sign up now</Link></p>
        </div>

    </div>
</div>


        </div>
        </>
    );
};

export default login;