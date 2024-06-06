import { useState } from 'react';
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector ,useDispatch} from 'react-redux';
import { changeUserId, changeUserRole, changeUserToken,changeUserName } from '../Actions';
function Navbar1() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
 const dispatch=useDispatch();
  let userName=useSelector(state=>state.updateUserName);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const handleLogout = () => {
      dispatch(changeUserToken({type:'UPDATE_USER_TOKEN',payload:"token"}));
      dispatch(changeUserId({type:'UPDATE_USER_ID',payload:0}));
      dispatch(changeUserRole({type:'UPDATE_USER_ROLE',payload:"CUSTOMER"}));
      dispatch(changeUserName({type:'UPDATE_USER_NAME',payload:"USER"}));
    window.location.href = '/login';
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <div class="container-fluid">
      <div style={{color:"red"}}>

      <Link to="/customerHome" style={{ color: "white" ,fontSize: "30px" }}>PromoFomo</Link>
      
      <span className="spacer"></span>
      
      
          <span className="spacer"></span>
          <Link to="/customerProducts" style={{ color: "white",fontSize: "20px"  }}><button class="btn btn-light">Products</button></Link>
          <span className="spacer"></span>
      
          <Link to="/customerServices" style={{ color: "white",fontSize: "20px"  }}><button class="btn btn-light">Services</button></Link>      
          <span className="spacer"></span>
      
      
          <Link to="/wishlist" style={{ color: "white" ,fontSize: "20px" }}><button class="btn btn-light">Wishlist</button></Link>
          <span className="spacer"></span>
      
          <Link to="/purchaseHistory" style={{ color: "white",fontSize: "20px"  }}><button class="btn btn-light">MyOrders</button></Link>
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