import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contacts from './pages/contacts/Contacts';
import Services from './pages/services/Services';
import Team from './pages/team/Team';
import Layout from './components/layout/Layout';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Layout>
          <Routes>
            {/* Signup as the default route */}
            <Route path="/" element={<Signup />} />
            <Route path="/register" element={<Signup />} />

            {/* Other routes */}
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/login" element={<Login />} />

            {/* Home route after successful signup (optional) */}
            {/* This route can be removed if you don't want to explicitly show the home page after signup */}
            <Route path="/home" element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;