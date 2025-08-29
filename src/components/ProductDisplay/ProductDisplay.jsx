import React, { useState, useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { ShopContext } from "../../context/ShopContext"; // sahi path lagao

const ProductDisplay = ({ product }) => {
  const [mainImage, setMainImage] = useState(product ? product.image : "");
  const { addToCart } = useContext(ShopContext);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-display">
      {/* Left side - thumbnails */}
      <div className="product-thumbnails">
        <img src={product.image} alt="" onClick={() => setMainImage(product.image)} />
        <img src={product.image} alt="" onClick={() => setMainImage(product.image)} />
        <img src={product.image} alt="" onClick={() => setMainImage(product.image)} />
        <img src={product.image} alt="" onClick={() => setMainImage(product.image)} />
      </div>

      {/* Center - big image */}
      <div className="product-main-image">
        <img src={mainImage} alt={product.name} className="product-img" />
      </div>

      {/* Right side - details */}
      <div className="productdisplay-right">
        <h1 className="product-title">{product.name}</h1>

        <div className="product-right">
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_dull_icon} alt="star" />
        </div>

        <div className="product-prices">
          <p className="new-price">${product.new_price}</p>
          <p className="old-price">${product.old_price}</p>
        </div>

        <div className="productdisplay-right-description">
          A lightweight usually knitted, pullover shirt, close fitting and round neckline and short sleeves
        </div>

        <div className="productdisplay-right-size">
          <h1>Select size</h1>
          <div>s</div>
          <div>m</div>
          <div>l</div>
          <div>x</div>
          <div>xxl</div>
        </div>

        <button className="add-to-cart-btn" onClick={() => addToCart(product.id)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDisplay;
