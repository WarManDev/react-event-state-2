import React from "react";
import PropTypes from "prop-types";

import ShopItem from "./ShopItem";
export default function LastView({ items }) {
  return (
    <div className='LastView'>
      {items.map((elem) => (
        <ShopItem item={elem} key={Math.random()} />
      ))}
    </div>
  );
}

LastView.propTypes = {
  items: PropTypes.array.isRequired,
};
