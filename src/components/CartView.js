import React from "react";
import PropTypes from "prop-types";

import ShopCart from "./ShopCart";
export default function CartView({ carts }) {
  return (
    <div className='CartView'>
      {carts.map((elem) => (
        <ShopCart cart={elem} key={Math.random()} />
      ))}
    </div>
  );
}

CartView.propTypes = {
  carts: PropTypes.array.isRequired,
};
