import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "sushi", amount: 2, price: 19.9 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    // this func is for close cart when user click on Backdrop.
    <Modal onCloseCart={props.onCloseCart}>
      {cartItems}
      <div className={classes.Total}>
        <spn>Total Amount</spn>
        <span>40.38</span>
      </div>
      <div className={classes.actions}>
        {/* here that OnCloseCart func get received...to close cart when click on close button */}
        <button className={classes["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
