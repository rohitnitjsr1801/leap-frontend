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
import Analytics from './Components/Analytics';
import AuthRoute from './Components/AuthRoute';
import { Provider } from 'react-redux';
import store from './store';
import ErrorPage from './Components/ErrorPage';


const App = () => {
  let userRole = useSelector(state => state.updateUserRole);
  return (
    <>
      {userRole === "ROLE_OWNER" || userRole === "ROLE_MANAGER" ? (
        <Navbar2 />
      ) : userRole === "ROLE_CUSTOMER" ? (
        <Navbar1 />
      ) : (
        <Navbar />
      )}
      {/* <Navbar1/> */}
      {/* <Navbar2/> */}
      <React.Fragment>
      <Routes>
        <Route path="/" element={<WithoutSignInHome/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/viewProduct/:productId" element={<AuthRoute><CustomerProductDetail/></AuthRoute>}/>
        <Route path="/pendingPromotions" element={<AuthRoute><PromotionTable/></AuthRoute>}/>
        <Route path="/purchaseHistory" element={<AuthRoute><CustomerPurchaseHistory/></AuthRoute>}/>
        <Route path="/customerHome" element={<CustomerHomePage/>}/>
        <Route path="/customerProducts" element={<CustomerProductPage/>}/>
        <Route path="/customerServices" element={<CustomerServicePage/>}/>
        <Route path="/managerHome" element={<ManagerHomePage/>}/>
        <Route path="/ownerHome" element={<OwnerHomePage/>}/>
        <Route path="/add" element={<AuthRoute><AddProduct/></AuthRoute>}/>
        <Route path="/manager/product" element={<AuthRoute><ManagerProductDetail/></AuthRoute>}/>
        <Route path="/owner/product" element={<AuthRoute><OwnerProductDetail/></AuthRoute>}/>
        <Route path="/addPromotion" element={<AuthRoute><AddPromotion /></AuthRoute>} />
        <Route path="/wishlist" element={<AuthRoute><CustomerWishlist /></AuthRoute>} />
        <Route path="/promotion/edit/:promotionId" element={<AuthRoute><EditPromotion /></AuthRoute>} />
        <Route path="/analytics" element={ <AuthRoute><Analytics/></AuthRoute>}/>
        <Route path="/errorPage" element={<ErrorPage/>}/>
      </Routes>
      </React.Fragment>
    </>
  );
};

export default App;
