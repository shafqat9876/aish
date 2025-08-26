import React from 'react';
import './RelatedProducts.css';
import data_product from '../assets/data';

const RelatedProducts = ({ products }) => {
  const displayProducts = products || data_product;

  const Item = ({ id, name, image, new_price, old_price }) => (
    <div className="related-product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>
        <span className="new-price">${new_price}</span>
        {old_price && <span className="old-price">${old_price}</span>}
      </p>
    </div>
  );

  return (
    <div className="related-products">
      <h2>Related Products</h2>
      <div className="relatedproducts-item">
        {displayProducts.map((item, i) => (
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

export default RelatedProducts;
