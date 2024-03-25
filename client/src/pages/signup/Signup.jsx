import { Link, useNavigate } from 'react-router-dom';
import './signup.css';
import axios from 'axios';
import { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [regiStatus, setRegiStatus] = useState('');
  const navigate = useNavigate();

  const Register = (e) => {
    e.preventDefault();
    if (!email || !username || !password) {
      setRegiStatus("All fields are required.");
      return;
    }

    axios.post('http://localhost:8800/users', {
      email: email,
      username: username,
      password: password
    })
    .then(function (response) {
      console.log(response);
      if (response.data.message === 'Enter the correct Details') {
        setRegiStatus("Please enter valid details.");
      } else {
        setRegiStatus('Account Created Successfully');
        navigate("/home");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className="kodi">
      <div className='signup'>
        <form>
          <label htmlFor="username">Username</label>
          <input type='text' onChange={(e) => setUsername(e.target.value)} placeholder='Enter name' name='username' required />
          <label htmlFor="email">Email Address</label>
          <input type='email' placeholder='Email' name='email' onChange={(e) => setEmail(e.target.value)} required />
          <label htmlFor="password">Password</label>
          <input type='password' placeholder='Password' name='password' onChange={(e) => setPassword(e.target.value)} required />
          <button className='submit' type='submit' onClick={Register}>Register</button>
          <p>Already have an account?</p>
          <span style={{color:"red",fontFamily:"sans-serif",fontSize:"14px"}}>{regiStatus}</span>
          <Link to='/login' className='goto'style={{color:"rebeccapurple", fontSize:"20px",fontFamily:"serif"}}>Login Here</Link>
        </form>
      </div>
    </div>
  )
}

export default Signup;
