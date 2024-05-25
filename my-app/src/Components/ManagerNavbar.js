import React,{useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar2() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
 
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
          <Link to="/add" style={{ color: "white",fontSize: "20px"  }}><button class="btn btn-light">Add Products/Services</button></Link>
          <span className="spacer"></span>
      
          <Link to="/" style={{ color: "white",fontSize: "20px"  }}><button class="btn btn-light">Apply Promotions</button></Link>      
          <span className="spacer"></span>
      
          <Link to="/" style={{ color: "white" ,fontSize: "20px" }}><button class="btn btn-light">Pending Promotions</button></Link>
          <span className="spacer"></span>
      
          <Link to="/" style={{ color: "white",fontSize: "20px"  }}><button class="btn btn-light">Analytics</button></Link>
          </div>

          <div className="dropdown">
          <button type="button" className="btn btn-light" onClick={toggleDropdown} style={{ width:"10rem",height:"2.4rem",marginRight: "0px" }}>
          {/* username */}
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