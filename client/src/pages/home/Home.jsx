import Coding from '../../assets/pic.jpeg';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <div className="home">
      
      <h1>EMPIRE TECH COMPANY</h1>
      <div className="intro">
        <p>We are a leading tech company located in Nairobi, Kenya, which deals with creating tech solutions ranging from individual needs to big enterprise needs. We are specialists in web development, and mobile application development. Above that, we also do data Science and machine Learning projects. We have specialists in big data.</p>
        <Link to='/about' className='link'>
          <button>READ MORE</button>
        </Link>
      </div>
      <h2>Our mission</h2>
      <div className="mission">
        <p>Empowering businesses to thrive in the digital age, our mission is to provide innovative solutions that transcend expectations. We are dedicated to fostering growth, driving success, and enriching lives through cutting-edge technology and unwavering commitment to excellence. With a focus on customer-centricity, integrity, and continuous improvement, we aim to be the trusted partner that enables our clients to achieve their full potential in an ever-evolving digital landscape.</p>
        <img src={Coding} alt='' />
      </div>
      <div className="services">
        <h2>We offer the following services</h2>
        <ul>
          <li>Web Design</li>
          <li>Web Development</li>
          <li>Mobile App Development</li>
          <li>Data Science Projects</li>
        </ul>
      </div>
      
    </div>
  );
};

export default Home;
