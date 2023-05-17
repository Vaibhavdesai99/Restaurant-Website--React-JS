import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../Store/Cartcontext";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  // Calculate the total amount in the cart and format it as a currency string
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  // Check if there are items in the cart
  const hasItems = cartCtx.items.length > 0;

  // Handler for removing an item from the cart
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  // Handler for adding an item to the cart
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  // Generate the list of cart items
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            //  .bind() on a function, it creates a new function with the same body as the original function but with some of its arguments pre-set.item.id is the first argument passed to the new function.
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );

  return (
    // Render the cart as a modal
    <Modal onCloseCart={props.onCloseCart}>
      {cartItems}
      <div className={classes.Total}>
        <span>Total Amount:</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
