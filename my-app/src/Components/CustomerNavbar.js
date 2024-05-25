import { useState } from 'react';
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
function Navbar1() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
 
  let userName=useSelector(state=>state.updateUserName);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const handleLogout = () => {
    // Perform logout logic here, such as clearing authentication tokens
    
    window.location.href = '/login';
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <div class="container-fluid">
      <div style={{color:"red"}}>

      <Link to="/" style={{ color: "white" ,fontSize: "30px" }}>PromoFomo</Link>
      
      <span className="spacer"></span>
      
      
          <span className="spacer"></span>
          <Link to="/" style={{ color: "white",fontSize: "20px"  }}><button class="btn btn-light">Products</button></Link>
          <span className="spacer"></span>
      
          <Link to="/" style={{ color: "white",fontSize: "20px"  }}><button class="btn btn-light">Services</button></Link>      
          <span className="spacer"></span>
      
      
          <Link to="/" style={{ color: "white" ,fontSize: "20px" }}><button class="btn btn-light">Wishlist</button></Link>
          <span className="spacer"></span>
      
          <Link to="/" style={{ color: "white",fontSize: "20px"  }}><button class="btn btn-light">MyOrders</button></Link>
         </div> 
          <div className="dropdown">
          <button type="button" className="btn btn-light" onClick={toggleDropdown} style={{ width:"10rem",height:"2.4rem",marginRight: "0px" }}>
            {userName}
          </button>
          {dropdownOpen && (
            <div className="dropdown-content">
              <button onClick={handleLogout} className="dropdown-item">
                Logout
              </button>
            </div>
          )}
        </div>
      {/* </div> */}
        
       </div>
  </nav>
  )
}

export default Navbar1