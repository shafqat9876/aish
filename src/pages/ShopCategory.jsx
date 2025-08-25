import React, { useContext } from 'react';  
import './ShopCategory.css';
import { ShopContext } from '../context/ShopContext';
import dropdown_icon from '../components/assets/dropdown_icon.png';
import Item from '../components/Item/Item';   

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="ShopCategory">
      <img src={props.banner} alt="banner" />

      <div className="ShopCategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of {all_product.length} products
        </p>
        <div className="ShopCategory-sort">
          Sort by <img src={dropdown_icon} alt="sort" />
        </div>
      </div>

      <div className="ShopCategory-products">
        {all_product.map((item, i) => {   // ✅ small "item"
          if (props.category === item.category) {   // ✅ spelling fix
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
