import React from 'react'; 
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Shop from './pages/Shop.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './pages/ShopCategory.jsx';
import LoginSignup from './pages/LoginSignup.jsx';
import Product from './pages/Product.jsx';   
import Cart from './pages/Cart.jsx';         
import Footer from './components/Footer/Footer.jsx';
import men_banner from './components/assets/banner_mens.png';
import women_banner from './components/assets/banner_women.png';      
import kid_banner from './components/assets/banner_kids.png';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
       <Route path="/mens" element={<ShopCategory category="men" banner={men_banner} />} />
        <Route path="/womens" element={<ShopCategory category="women" banner={women_banner} />} />
        <Route path="/kids" element={<ShopCategory category="kid" banner={kid_banner} />} />

          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />   
      </BrowserRouter>
    </div>
  );
}

export default App;
