import React from 'react';
import Login from './Components/Login';
import Register from './Components/Register';
import ManagerHomePage from './Components/ManagerHomePage';
import CustomerHomePage from './Components/CustomerHomePage';
import OwnerHomePage from './Components/OwnerHomePage';
import {Routes,Route} from 'react-router-dom';
import Navbar1 from './Components/CustomerNavbar';
import Navbar2 from './Components/ManagerNavbar';
import AddProduct from './Components/AddProduct';
import { useSelector } from 'react-redux';
import Navbar from './Components/HomeNavbar';
import WithoutSignInHome from './Components/WithoutSignInHome';
import PromotionTable from './Components/PendingPromotions';
import CustomerPurchaseHistory from './Components/CustomerPurchaseHistory';
import ManagerProductDetail from './Components/ManagerProductDetail';
import AddPromotion from './Components/AddPromotion';
import CustomerProductDetail from './Components/CustomerProductDetail';
import EditPromotion from './Components/EditPromotion';
import CustomerWishlist from './Components/CustomerWishlist';
import CustomerProductPage from './Components/CustomerProductsPage';
import CustomerServicePage from './Components/CustomerServicePage';
import OwnerProductDetail from './Components/OwnerProductDetail';



const App = () => {
  
  let userRole=useSelector(state=>state.updateUserRole);
  return (
    <>    
      {userRole==='ROLE_OWNER'||userRole==='ROLE_MANAGER'?<Navbar2/>:userRole==='ROLE_CUSTOMER'?<Navbar1/>:<Navbar/>}
      {/* <Navbar1/> */}
      {/* <Navbar2/> */}
      <React.Fragment>
      <Routes>
        <Route path="/" element={<WithoutSignInHome/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/viewProduct/:productId" element={<CustomerProductDetail/>}/>
        <Route path="/pendingPromotions" element={<PromotionTable/>}/>
        <Route path="/purchaseHistory" element={<CustomerPurchaseHistory/>}/>
        <Route path="/customerHome" element={<CustomerHomePage/>}/>
        <Route path="/customerProducts" element={<CustomerProductPage/>}/>
        <Route path="/customerServices" element={<CustomerServicePage/>}/>
        <Route path="/managerHome" element={<ManagerHomePage/>}/>
        <Route path="/ownerHome" element={<OwnerHomePage/>}/>
        <Route path="/add" element={<AddProduct/>}/>
        <Route path="/manager/product" element={<ManagerProductDetail/>}/>
        <Route path="/owner/product" element={<OwnerProductDetail/>}/>
        <Route path="/addPromotion" element={<AddPromotion />} />
        <Route path="/wishlist" element={<CustomerWishlist />} />
        <Route path="/promotion/edit/:promotionId" element={<EditPromotion />} />
      </Routes>
      </React.Fragment>
    </>
  );
};

export default App;
