import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
function Navbar() {
  
 
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <div class="container-fluid">
      <div style={{color:"red"}}>

      <Link to="/" style={{ color: "white" ,fontSize: "30px" }}>PromoFomo</Link>
      
      <span className="spacer"></span>
      
      
          <span className="spacer"></span>
          <Link to="/login" style={{ color: "white",fontSize: "20px"  }}><button class="btn btn-light" style={{width:"8rem"}}>Login</button></Link>
          <span className="spacer"></span>
      
          <Link to="/register" style={{ color: "white",fontSize: "20px"  }}><button class="btn btn-light" style={{width:"8rem"}}>Register</button></Link>      
          <span className="spacer"></span>
      
          
        </div>
      {/* </div> */}
        
        
       </div>
  </nav>
  )
}

export default Navbar