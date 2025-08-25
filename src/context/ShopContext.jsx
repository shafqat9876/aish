import React, { createContext, useState } from 'react';

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [all_product] = useState([
    { id: 1, name: "Shirt", category: "men", image: "/img/shirt.png", new_price: 30, old_price: 50 },
    { id: 2, name: "Dress", category: "women", image: "/img/dress.png", new_price: 50, old_price: 80 },
    { id: 3, name: "Kids T-shirt", category: "kid", image: "/img/kid.png", new_price: 20, old_price: 40 }
  ]);

  return (
    <ShopContext.Provider value={{ all_product }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
