import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
function Navbar() {
  const navbarStyle = {
      backgroundColor: '#222831',
      fontFamily: '"Lucida Console", "Courier New", monospace',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      color: 'white'
    };

    const brandStyle = {
      color: 'white',
      fontSize: '30px',
      textDecoration: 'none',
    };

    const buttonContainerStyle = {
      display: 'flex',
      gap: '10px'
    };

    const buttonStyle = {
      width: '8rem',
      fontSize: '20px',
    };

    return (
      <nav style={navbarStyle}>
        <Link to="/" style={brandStyle}>PromoFomo</Link>
        <div style={buttonContainerStyle}>
          <Link to="/login">
            <button className="btn btn-light" style={buttonStyle}>Login</button>
          </Link>
          <Link to="/register">
            <button className="btn btn-light" style={buttonStyle}>Register</button>
          </Link>
        </div>
      </nav>
    );
  }

export default Navbar