import React from "react";
import PropTypes from "prop-types";

export default function ShopCart({ cart }) {
  const styles = {
    backgroundImage: "url(" + cart.img + ")",
  };
  return (
    <div className='ShopCart' style={styles}>
      <h3 className='cart-name'>{cart.name}</h3>
      <span className='cart-color'>{cart.color}</span>
      <div className='cart-bottom'>
        <span>{"$" + cart.price}</span>
        <button className='btn'>Add to cart</button>
      </div>
    </div>
  );
}

ShopCart.propTypes = {
  cart: PropTypes.object.isRequired,
};
