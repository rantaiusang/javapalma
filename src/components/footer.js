import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p>&copy; {new Date().getFullYear()} JavaPalma. All rights reserved.</p>
        <div>
          <Link to="/terms-of-service" style={styles.link}>Terms of Service</Link>
          <Link to="/privacy-policy" style={styles.link}>Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#008000',
    color: 'white',
    padding: '1rem',
    marginTop: '2rem',
    textAlign: 'center',
  },
  container: {
    maxWidth: '960px',
    margin: '0 auto',
  },
  link: {
    color: 'white',
    marginLeft: '1rem',
    textDecoration: 'none',
  }
};

export default Footer;
