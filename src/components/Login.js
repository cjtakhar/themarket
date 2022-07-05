import { useState } from 'react';

export default function Login() {
    const [isSubmitted, setIsSubmitted] = useState(false)
    return(
        <div className="form">
        <form>
            <div className="input-container">
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
        </form>
        </div>
    )
}