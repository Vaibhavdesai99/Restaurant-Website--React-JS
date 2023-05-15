import React, { useState } from "react";
import CartContext from "./Cartcontext";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);

  const addItemToCartHandler = (item) => {
    updateItems([...items, item]);
    console.log("inside addItemHandler", cartContext);
  };

  // To remove item from cart :
  const removeItemFromCartHandler = (id) => {
    const updatedItemList = items.map((item) => {
      if (item.id === id) {
        // Decrease the quantity by 1
        const updatedItem = { ...item };
        updatedItem.quantity -= 1;
        // Adjust the price accordingly
        updatedItem.price = item.price * updatedItem.quantity;
        return updatedItem;
      }
      return item;
    });
    // Remove the item if the quantity becomes zero
    const updatedItems = updatedItemList.filter((item) => item.quantity > 0);
    updateItems(updatedItems);
  };

  // CartContext
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
