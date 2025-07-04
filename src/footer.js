import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';

import Home from './pages/home';
import About from './pages/about';
import Login from './pages/login';
import Profile from './pages/profile';
import Donasi from './pages/donasi';
import Investasi from './pages/investasi';
import ProjectDetail from './pages/projectdetail';
import TermsOfService from './pages/termsofservice';
import PrivacyPolicy from './pages/privacypolicy';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/donasi" element={<Donasi />} />
        <Route path="/investasi" element={<Investasi />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
};

export default App;
