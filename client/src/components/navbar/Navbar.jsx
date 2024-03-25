import  { useState } from "react";
import { Link } from "react-router-dom";
import './navbar.css';
import Logo from '../../assets/logo.png';
import axios from "axios";
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isOpen, setIsopen] = useState(false)
  
const handleOpen =()=>{
  setIsopen(!isOpen)
}

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/search?term=${searchTerm}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  return (
    <div className="navbar">
      <div className="goto">
        <Link to='/' className="link">HOME</Link>
        <Link to='/about' className="link">ABOUT</Link>
        <Link to='/contacts' className="link">CONTACTS</Link>
        <Link to='/team' className="link">TEAM</Link>
        <Link to='/services' className="link">SERVICES</Link>
      </div>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <button className="bato">
      <AiOutlineMenu className="menu-icon" onClick={handleOpen}
      style={{color:"white", height:"50px", width:"50px", borderRadius:"50%"}} />

      </button>
      {isOpen  && (
        <div className="nishow">
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/contacts">Contacts</a>
          <a href="/team">Team</a>
          <a href="/services">Services</a>
        </div>
      )}
      <div className="auth">
        <Link to='/register'>
          <button className='register'>Signup</button>
        </Link>
        <Link to='/login'>
          <button className='login'>Login</button>
        </Link>
      </div>
      <div className="search">
        <div className="input">
          <input type="text" name="search" placeholder="search" value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} />
          <button onClick={handleSearch}>Search</button>
          <ul>
            {/* Conditional rendering for search results */}
            {Array.isArray(searchResults) && searchResults.length > 0 && searchResults.map(result => (
              <li key={result.id}>{result.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
