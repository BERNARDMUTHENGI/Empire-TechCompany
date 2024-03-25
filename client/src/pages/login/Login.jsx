import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8800/login', { username, password })
      .then((res) => {
        if (res.data.message) {
          setLoginStatus(res.data.message);
        } else {
          // Assuming you want to redirect or show a success message on successful login
          setLoginStatus(`Welcome, ${res.data[0].username}!`);
        }
      })
      .catch((error) => {
        console.error(error);
        setLoginStatus('User Doesnt Exist.');
      });
  };

  return (
    <>
      <div className="kodi">
        <div className='signup'>
          <form onSubmit={handleLogin}>
            <label htmlFor="username">Username</label>
            <input type='text' placeholder='Username' onChange={(e) => setUsername(e.target.value)} name='username'></input>
            <label htmlFor="password">Password</label>
            <input type='password' placeholder='Password' name='password' onChange={(e) => setPassword(e.target.value)}></input>
            <button type="submit" className="submit">Login</button>
            <p>Already have an account?</p>
            <span style={{color:"red",fontFamily:"sans-serif",fontSize:"14px"}}>{loginStatus}</span>
            <Link to='/register' className="goto" style={{color:"rebeccapurple", fontSize:"20px",fontFamily:"serif"}}>Create one Here</Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
