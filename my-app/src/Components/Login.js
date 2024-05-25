// Login.js
import React, { useState,useEffect } from 'react';
import '../App.css'; // Importing the CSS file for styling
import Register from './Register';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import { changeUserId, changeUserRole, changeUserToken,changeUserName } from '../Actions';

const Login = ({ onLogin }) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();


  let userId= useSelector(state => state.updateUserId);
  let userToken=useSelector(state=>state.updateUserToken);
  let userRole=useSelector(state=>state.updateUserRole);
  
  useEffect(() => {
    if (userId !== 0) {
      // Perform redirect based on the role
      console.log(userId);
      const user = JSON.parse(localStorage.getItem('user'));
      console.log(user.roles[0]);
      if (user.roles[0] === "ROLE_MANAGER") {
        navigate('/managerHome');
      } else if (user.roles[0] === "ROLE_OWNER") {
        navigate('/ownerHome');
      } else {
        navigate('/customerHome');
      }
    }
  }, [userId, navigate]);


  async function handleLogin(){
    
    try {
      // Make the API call to signin and get the JWT token
      const response = await axios.post('http://localhost:8080/api/auth/signin', {
        username: username,
        password: password,
      });
      console.log(response);
      // Extract the JWT token from the response
      const user = response;
      // debugger;
      console.log(user.data);
      // debugger;
      console.log(response.data.roles[0]);
      // Save the token to localStorage or sessionStorage for persistence
      localStorage.setItem('user', JSON.stringify(user.data)); // You can also use sessionStorage if you want the token to be cleared when the browser is closed
      
      dispatch(changeUserToken({type:'UPDATE_USER_TOKEN',payload:response.data.token}));
      dispatch(changeUserId({type:'UPDATE_USER_ID',payload:response.data.id}));
      dispatch(changeUserRole({type:'UPDATE_USER_ROLE',payload:response.data.roles[0]}));
      dispatch(changeUserName({type:'UPDATE_USER_NAME',payload:response.data.username}));
      
      console.log(userId);
      console.log(userToken);
      // console.log(user);
    } catch (error) {
      // Handle any errors that occur during the signin process
      console.error('Error signing in:', error.message);
        alert('Invalid Credentials!! Try Again'); // Throw an error if the response status is not 200
    }
  
  };

  return (
    <>
    <br/>
     
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <div>
        don't have an account?
      </div>
      <Link to="/register">
        Register Here
      </Link>
      
    </div>
    </>
  );
};

export default Login;
