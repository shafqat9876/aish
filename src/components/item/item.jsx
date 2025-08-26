import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, name, image, new_price, old_price }) => {
  return (
    <div className="item">
      <Link to={`/product/${id}`}>
        <img 
          src={image} 
          alt={name} 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      </Link>
      <p>{name}</p>
      <div className="item-prices">
        <span className="item-price-new">${new_price}</span>
        {old_price && <span className="item-price-old">${old_price}</span>}
      </div>
    </div>
  );
};

export default Item;
