import React, { createContext, useState } from "react";
import all_product from "../components/assets/all_product"; // ✅ correct import

export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
  // make products from props OR fallback to all_product
  const [products] = useState(all_product);

  // create empty cart object
  const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < products.length; i++) {
      cart[products[i].id] = 0; 
    }
    return cart;
  };

  const [cart, setCart] = useState(getDefaultCart());

  return (
    <ShopContext.Provider value={{ all_product: products, cart, setCart }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
