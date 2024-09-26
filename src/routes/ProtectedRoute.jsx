import React from 'react';
import { Navigate } from 'react-router-dom';
import { SIGNIN } from './RoutesConstant';

const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem('token');
  const tokenExpiration = localStorage.getItem('tokenExpiration');

  const isTokenValid = () => {
    return token && tokenExpiration && Date.now() < tokenExpiration;
  };

  return isTokenValid() ? element : <Navigate to={SIGNIN} />;
};

export default ProtectedRoute;
