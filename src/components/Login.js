import { useState } from 'react';
import PropType from 'prop-types';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function Login( { setToken }) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }

    return(
        <div className="form">
        <form onSubmit={handleSubmit}>
            <div className="form-container">
            <div className="input-container">
            <h2>Login</h2>
                <label></label>
                <input onChange={e => setUsername(e.target.value)} className="input-username" placeholder="username" type="text" name="uname" required /> 
            </div>
            <div className="input-container">
                <label></label>
                <input onChange={e => setPassword(e.target.value)} className="input-pw" placeholder="password" type="password" name="pass" required />
            </div>
            <div className="submit-button">
                <input className="btn" type="submit" />
            </div>
            </div>
        </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropType.func.isRequired
}

