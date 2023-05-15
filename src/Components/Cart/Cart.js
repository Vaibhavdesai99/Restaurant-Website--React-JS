import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../Store/Cartcontext";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  //To Club the same item-name  together and show total quantity whose having same name.
  const groupedItems = cartCtx.items.reduce((acc, item) => {
    const existingItem = acc.find(
      (groupedItem) => groupedItem.name === item.name
    );
    if (existingItem) {
      existingItem.quantity += Number(item.quantity);
      existingItem.price += item.price * Number(item.quantity);
    } else {
      acc.push({
        id: item.id,
        name: item.name,
        quantity: Number(item.quantity),
        price: item.price * Number(item.quantity),
      });
    }
    return acc;
  }, []);

  //  To print the TOTAL AMOUNT OF Items were ADDED.
  const totalAmount = `$${groupedItems
    .reduce((acc, item) => acc + item.price, 0)
    .toFixed(2)}`;

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {groupedItems.map((item) => (
        <li key={item.id}>
          <div>
            <h3>{item.name}</h3>
            <div className={classes.summary}>
              <span className={classes.price}>
                Price: {item.price.toFixed(2)}
              </span>
              <span className={classes.quantity}>
                Quantity: {item.quantity}
              </span>
            </div>
            <div className={classes.Cartactions}>
              <button onClick={() => cartCtx.addItem(item)}>+</button>
              <button onClick={() => cartCtx.removeItem(item.id)}>-</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    // this func is for close cart when user click on Backdrop.
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
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
