import React from 'react'; 
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Shop from './pages/Shop.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './pages/ShopCategory.jsx';
import LoginSignup from './pages/LoginSignup.jsx';
import Product from './pages/Product.jsx';   
import Cart from './pages/Cart.jsx';         

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory category="men" />} />
          <Route path="/womens" element={<ShopCategory category="women" />} />
          <Route path="/kids" element={<ShopCategory category="kid" />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
