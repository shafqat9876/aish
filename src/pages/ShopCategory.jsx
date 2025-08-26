import React, { useContext } from "react";
import "./ShopCategory.css";
import { ShopContext } from "../context/ShopContext";
import Item from "../components/Item/Item";

const ShopCategory = (props) => {
  
  const { all_product } = useContext(ShopContext);

  return (
    <div className="ShopCategory">
      <img src={props.banner} alt="banner" />

      <div className="ShopCategory-products">
        {all_product
          .filter((item) => item.category === props.category) // 👈 filter by category
          .map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
      </div>
    </div>
  );
};

export default ShopCategory;
