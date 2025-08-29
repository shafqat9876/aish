import React from 'react'
import "./Breadcrum.css";
import arrow_icon from '../assets/arrow.png'
const Breadcrum = (props) => {
    const {product} =props 
  return (
    <div>
      Home <img src={arrow_icon} alt="" /> Shop <img src="arrow_icon" alt="" />{product.catogery}
      <img src="arrow_icon" alt="" />{product.name}
    </div>
  )
}

export default Breadcrum
