import React, { useState } from 'react';
import '../App.css'; // Importing the CSS file for styling
import axios from 'axios';
import { Link } from 'react-router-dom';
const Register = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [age,setAge]=useState();
  const [gender, setGender] = useState('MALE');
  const [organization, setOrganization] = useState("");

  async function handleRegister()
  {
    // Here you can implement your registration logic
    // For simplicity, let's just pass the username to the parent component
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return; // Exit the function if passwords do not match
    } 

    if (age < 0 || age > 80) {
      alert('Please enter a valid age (0 - 80)');
      return; // Exit the function if age is not valid
    }
    try {
      // console.log(username+" "+email+" "+password+" "+role+" "+age+" "+gender.toUpperCase());
      // Make the HTTP POST request to the signup API endpoint
      const formData={
        "username":username.trim().toString(),
        "password":password.trim().toString(),
        "email":email.trim().toString(),
        "role":[role.trim().toString()],
        "gender":gender.trim().toUpperCase(),
        "age":age,
        "organization":organization
    }
    console.log(formData)
      const response = await axios.post('http://localhost:8080/api/auth/signup',formData
      );

      // Handle the response as needed
      console.log('Registration successful:', response.data);
      window.location.href = '/login';

      // Call the parent component's onRegister function
      // onRegister(username);
    } catch (error) {
      // Handle errors
      console.error('Error registering user:', error);
      alert('Error registering user. Please try again.');
    }
  };



  return (
    <div className="register-container">
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

         
      <select value={role} onChange={(e)=>setRole(e.target.value)}>
        <option value="">Select Role</option>
        <option value="customer">Customer</option>
        <option value="manager">Manager</option>
        <option value="owner">Owner</option>
      </select>
    
        {(role === 'customer')&&<div>

          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <input
            type="text"
            placeholder="Enter Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
      />

        </div>}
      {(role === 'manager' || role === 'owner') && (
        <div>

          <input
            type="text"
            placeholder="Organization"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}/>
         </div>
      )}
      <button type="button" onClick={handleRegister}>Register</button>
      <div>
        Already have an account?<br></br>
        <Link to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
