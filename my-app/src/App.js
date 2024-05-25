// App.js
import React, { useState } from 'react';
import Login from './Components/Login';
import Register from './Components/Register';
import ManagerHomePage from './Components/ManagerHomePage';
import CustomerHomePage from './Components/CustomerHomePage';
import OwnerHomePage from './Components/OwnerHomePage';
import {Routes,Route} from 'react-router-dom';
import Navbar1 from './Components/CustomerNavbar';
import Navbar2 from './Components/ManagerNavbar';
import AddProduct from './Components/AddProduct';

const App = () => {

  return (
    <>    
      {/* <Navbar1/> */}
      <Navbar2/>
      <React.Fragment>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/customerHome" element={<CustomerHomePage/>}/>
        <Route path="/managerHome" element={<ManagerHomePage/>}/>
        <Route path="/ownerHome" element={<OwnerHomePage/>}/>
        <Route path="/add" element={<AddProduct/>}/>
      </Routes>
      </React.Fragment>
    </>
  );
};

export default App;
