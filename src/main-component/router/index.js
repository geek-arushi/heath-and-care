import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from '../HomePage'
import AboutPage from '../AboutPage/AboutPage';
import TeamPage from '../TeamPage/TeamPage';
import TeamSinglePage from '../TeamSinglePage/TeamSinglePage';
import Department from '../Department/Department';
import DepertmentSinglePage from '../DepertmentSinglePage/DepertmentSinglePage';
import ServicePage from '../ServicePage/ServicePage';
import SeviceSinglePage from '../SeviceSinglePage';
import ShopPage from '../ShopPage';
import ProductSinglePage from '../ProductSinglePage';
import CartPage from '../CartPage/CartPage';
import WishlistPage from '../WishlistPage/WishlistPage';
import CheckoutPage from '../CheckoutPage';
import OrderRecived from '../OrderRecived/OrderRecived';
import ContactPage from '../ContactPage/ContactPage';
import AppoinmentPage from '../AppoinmentPage/AppoinmentPage';
import ErrorPage from '../ErrorPage/ErrorPage';
import Login from '../../components/Login/Login';
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute';

// Admin Dashboard Pages
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import ProductManagement from '../AdminDashboard/ProductManagement';
import ServiceManagement from '../AdminDashboard/ServiceManagement';
import TeamManagement from '../AdminDashboard/TeamManagement';
import OrderManagement from '../AdminDashboard/OrderManagement';

const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='home' element={<Homepage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='appoinment' element={<AppoinmentPage />} />
          <Route path='department' element={<Department />} />
          <Route path='department-single/:slug' element={<DepertmentSinglePage />} />
          <Route path='services' element={<ServicePage />} />
          <Route path='service-single/:slug' element={<SeviceSinglePage />} />
          <Route path='team' element={<TeamPage />} />
          <Route path='team-single/:slug' element={<TeamSinglePage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='/404' element={<ErrorPage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/product-single/:slug' element={<ProductSinglePage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/wishlist' element={<WishlistPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/order_received' element={<OrderRecived />} />
          <Route path='/login' element={<Login />} />
          
          {/* Admin Dashboard Routes */}
          <Route path='/admin/dashboard' element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
          <Route path='/admin/products' element={<ProtectedRoute><ProductManagement /></ProtectedRoute>} />
          <Route path='/admin/services' element={<ProtectedRoute><ServiceManagement /></ProtectedRoute>} />
          <Route path='/admin/team' element={<ProtectedRoute><TeamManagement /></ProtectedRoute>} />
          <Route path='/admin/orders' element={<ProtectedRoute><OrderManagement /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
