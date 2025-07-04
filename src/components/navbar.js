import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/navbar';
import Footer from './components/footer';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import Home from './pages/home';
import About from './pages/about';
import Login from './pages/login';
import Profile from './pages/profile';
import Donasi from './pages/donasi';
import Investasi from './pages/investasi';
import ProjectDetail from './pages/projectdetail';
import TermsOfService from './pages/termsofservice';
import PrivacyPolicy from './pages/privacypolicy';

// Wrapper to use location for AnimatePresence
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/donasi" element={<Donasi />} />
        <Route path="/investasi" element={<Investasi />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
};

export default App;
