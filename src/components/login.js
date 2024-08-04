// Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

const Login = () => {

    const navigate=useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
//   const history = useHistory();

  const handleLogin = () => {
    // Simulated login logic (replace with actual authentication)
    // Assume backend returns role after successful authentication
    const role = 'admin'; // Replace with actual role received from backend

    // Redirect based on role
    // switch (role) {
    //   case 'admin':
    //     history.push('/admin');
    //     break;
    //   case 'user':
    //     history.push('/user');
    //     break;
    //   default:
    //     history.push('/');
    // }
  };

  return (


    <div className="Login">

       <div style={{border: '2px solid black',width:'max-width',height:'max-height'}}> 
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button className='btn' type="submit" onClick={()=>navigate("/doctor")}>Login</button>
      </form>
      </div>
    </div>
  );
};

export default Login;
