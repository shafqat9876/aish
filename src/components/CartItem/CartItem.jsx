import React, { useContext } from "react";
import "./CartItem.css";
import { ShopContext } from "../../context/ShopContext";

const CartItem = () => {
  const { all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>

      <div className="cart-header">
        <span>Product</span>
        <span>Title</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Action</span>
      </div>
      <hr />

      {all_product.map((item) => {
        if (cartItems[item.id] > 0) {
          return (
            <div className="cart-row" key={item.id}>
              <img src={item.image} alt={item.name} className="cart-img" />
              <span>{item.name}</span>
              <span>${item.new_price}</span>
              <span>{cartItems[item.id]}</span>
              <div>
                <button onClick={() => addToCart(item.id)}>➕</button>
                <button onClick={() => removeFromCart(item.id)}>✕</button>
              </div>
            </div>
          );
        }
        return null;
      })}

      <hr />
      <div className="cart-footer">
        {totalAmount > 0 ? (
          <>
            <h3>Total: ${totalAmount}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </>
        ) : (
          <h3>Your cart is empty 🛒</h3>
        )}
      </div>
    </div>
  );
};

export default CartItem;
