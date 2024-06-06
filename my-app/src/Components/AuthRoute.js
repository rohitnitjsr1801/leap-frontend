import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
const AuthRoute = ({ children }) => {
  const isAuthenticated = useSelector(state => state.authReducer);
  
  const navigate=useNavigate();
  // console.log(isAuthenticated);
  if (isAuthenticated==0) 
    {
        window.location.href = '/login';
    }
  return children;
};

export default AuthRoute;
