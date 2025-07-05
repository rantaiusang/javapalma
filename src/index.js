import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css'; // ✅ Import Tailwind + custom CSS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
