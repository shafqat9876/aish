import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className="DescriptionBox">
      <div className='descriptionbox-navigator'>
        <div className="description-nav-box">Description</div>
        <div className="description-nav-box fade">Reviews (122)</div>
      </div>
      <div className='descriptionbox-description'>
        <p>Our online e-commerce platform offers a seamless shopping experience, 
          allowing customers to browse a wide range of products, compare prices,
           and make secure purchases from the comfort of their homes. With fast delivery,
            easy returns, and 24/7 customer
           support, we ensure convenience, quality, and satisfaction for every shopper.</p>
           <p>Our online e-commerce platform offers a seamless shopping experience, allowing customers to browse a wide range of products, compare prices, and make secure purchases from the comfort of their homes. With fast delivery, easy returns, 
            and 24/7 customer support, we ensure convenience, quality, and satisfaction for every shopper.</p>
      </div>
    </div>
  );
};

export default DescriptionBox;
