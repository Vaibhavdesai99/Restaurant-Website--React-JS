import { useReducer } from "react";

import CartContext from "./Cartcontext";

// Initial state of the cart
const defaultCartState = {
  items: [], // Array to store cart items
  totalAmount: 0, // Total amount of all items in the cart
};

// Reducer function that handles state updates based on actions
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    // Calculate the updated total amount by adding the price of the new item
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    // Check if the item already exists in the cart
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    // here we are storing reference to the existing item
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      // If the item already exists, update its amount
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      // If the item doesn't exist, add it to the cart
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    // Find the index of the item to be removed
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    // Calculate the updated total amount by subtracting the price of the item
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      // If the item's amount is 1, remove it from the cart
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      // If the item's amount is more than 1, decrement its amount
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  // Return the default cart state if the action type is unknown
  return defaultCartState;
};

const CardProvider = (props) => {
  // Use the cartReducer to manage the cart state
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  // Action to add an item to the cart
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  // Action to remove an item from the cart
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  // Create the cartContext object with the cart state and actions
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CardProvider;
