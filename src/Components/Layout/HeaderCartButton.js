import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = (props) => {
  return (
    <div>
      {/* here we received that onClick func ...to show CartItems */}
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Order</span>
        <span className={classes.amt}>3</span>
      </button>
    </div>
  );
};

export default HeaderCartButton;
