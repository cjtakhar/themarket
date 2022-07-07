import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
   
   export default function Login({ setToken }) {
     const [username, setUserName] = useState();
     const [password, setPassword] = useState();
   
     const handleSubmit = async e => {
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
                <input type="text" onChange={e => setUserName(e.target.value)} className="input-username" placeholder="username" required /> 
            </div>
            <div className="input-container">
                <label></label>
                <input type="password" onChange={e => setPassword(e.target.value)} className="input-pw" placeholder="password" required />
            </div>
            <div className="submit-button">
                <button className="btn" type="submit">Submit</button>
            </div>
            </div>
        </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

