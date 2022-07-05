import { useState } from 'react';
import { database, errors } from './UserDB';

export default function Login() {

    return(
        <div className="form">
        <form>
            <div className="form-container">
            <div className="input-container">
            <h2>Login</h2>
                <label></label>
                <input className="input-username" placeholder="username" type="text" name="uname" required /> 
            </div>
            <div className="input-container">
                <label></label>
                <input className="input-pw" placeholder="password" type="password" name="pass" required />
            </div>
            <div className="submit-button">
                <input className="btn" type="submit" />
            </div>
            </div>
        </form>
        </div>
    )
}