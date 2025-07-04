// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const wallet = localStorage.getItem('wallet');
  return wallet ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
