import React, { useState } from "react";

import CartContext from "./Cartcontext";

const CartProvider = (props) => {
  // we use useState() here caz , when new item get added the old get overridden by new one so ...
  const [items, updateItems] = useState([]);
  const addItemToCartHandler = (item) => {
    updateItems([...items, item]);
    console.log("inside addItemHandler", cartContext);
  };

  const removeItemFromCartHandler = (id) => {};

  // here we assign state variable to items :
  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {console.log("re-render when update state", cartContext)}
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
