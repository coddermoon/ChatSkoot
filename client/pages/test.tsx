import React from 'react';
import '../styles/form.module.css'

const test = () => {
    return (
        <>
            <div className="container">
    Really simple Material Design Login Form.

    <div className="panel">
        <form className='form' action="" method="post">

        <div className="panel-group">
            <input className="input" type="text" required />
            <span className="border"></span>
            <label>Username</label>
        </div>

        <div className="panel-group">
            <input className="input" type="password" required />
            <span className="border"></span>
            <label>Password</label>
        </div>

        <button type="submit">Login</button>

        </form>

        <div className="panel-footer">
            <p><a href="#">Forgotten password?</a></p>
            <p>Not a member? <a href="#">Sign up now</a></p>
        </div>

    </div>
</div>


        </>
    );
};

export default test;