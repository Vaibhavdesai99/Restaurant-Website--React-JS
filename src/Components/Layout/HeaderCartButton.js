import React, { useContext } from "react";
import CartContext from "../../Store/Cartcontext";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = (props) => {
  // Here we use ContextAPI

  const cartCtx = useContext(CartContext);

  let quantity = 0;
  cartCtx.items.forEach((item) => {
    // WE use Nmber caz it is in string so 1+2 => 12 but we want 3 so use Number.
    quantity = quantity + Number(item.quantity);
  });

  return (
    <div>
      {/* here we received that onClick func ...to show CartItems */}
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Order</span>
        <span className={classes.amt}>{quantity}</span>
      </button>
    </div>
  );
};

export default HeaderCartButton;
