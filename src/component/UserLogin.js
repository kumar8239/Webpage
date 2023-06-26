import React, { useState } from 'react'
import '../style/UserLogin.css'
import UserRegister from './UserRegister';
export default function UserLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Perform login logic here
    };
    return (
        <div className='login'>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div class="imgcontainer">
                    <img src='avatar.jpg' alt="Avatar" class="avatar" />
                </div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button type="submit">Login</button>
                <br />


                <button type="button" className="cancelbtn">Cancel</button>
                <span className="psw">Forgot <a href="#">password?</a></span>

            </form>
        </div >
    )
}
