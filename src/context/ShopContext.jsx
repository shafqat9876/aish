import React, { createContext, useState } from "react";
import all_product from "../components/assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_product.length; i++) {
    cart[all_product[i].id] = 0; // id se store karna
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };

  const getTotalCartAmount = () => {
    let total = 0;
    for (let item in cartItems) {
      if (cartItems[item] > 0) {
        let product = all_product.find((p) => p.id === Number(item));
        total += product.new_price * cartItems[item];
      }
    }
    return total;
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
