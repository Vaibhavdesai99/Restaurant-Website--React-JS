import React, { useContext } from "react";
import CartContext from "../../Store/Cartcontext";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = (props) => {
  // Here we use ContextAPI

  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  return (
    <div>
      {/* here we received that onClick func ...to show CartItems */}
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Order</span>
        <span className={classes.amt}>{numberOfCartItems}</span>
      </button>
    </div>
  );
};

export default HeaderCartButton;
