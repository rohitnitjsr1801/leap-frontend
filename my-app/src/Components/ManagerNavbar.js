import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';

import { changeUserId, changeUserRole, changeUserToken,changeUserName } from '../Actions';
function Navbar2() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dispatch = useDispatch();
  let userName=useSelector(state=>state.updateUserName);
  const user = JSON.parse(localStorage.getItem('user'));
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const handleLogout = () => {
    // Perform logout logic here, such as clearing authentication tokens
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

      <Link to={user.roles[0] === "ROLE_MANAGER" ? "/managerHome" : "/ownerHome"} style={{ color: "white" ,fontSize: "30px" }}>PromoFomo</Link>

      <span className="spacer"></span>


          <span className="spacer"></span>
          <Link to={user.roles[0] === "ROLE_MANAGER" ? "/managerHome" : "/ownerHome"} style={{ color: "white",fontSize: "20px"  }}><button class="btn btn-light">Home</button></Link>
          <span className="spacer"></span>

          <Link to="/add" style={{ color: "white",fontSize: "20px"  }}><button class="btn btn-light">Add Products/Services</button></Link>
          <span className="spacer"></span>

          <Link to="/addPromotion" style={{ color: "white", fontSize: "20px" }}><button className="btn btn-light">Create Promotion</button></Link>
          <span className="spacer"></span>

          <Link to="/pendingPromotions" style={{ color: "white" ,fontSize: "20px" }}><button class="btn btn-light">Pending Promotions</button></Link>
          <span className="spacer"></span>

          <Link to="/analytics" style={{ color: "white",fontSize: "20px"  }}><button class="btn btn-light">Analytics</button></Link>
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

export default Navbar2