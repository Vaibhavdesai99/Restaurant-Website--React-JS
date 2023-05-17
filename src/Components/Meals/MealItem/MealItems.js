import React, { useContext } from "react";
import MealItemForm from "./MealItemForm";
import classes from "./MealItems.module.css";
import CartContext from "../../../Store/Cartcontext";
const MealItems = (props) => {
  const cartctx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartctx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li>
      <div className={classes.meals}>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        {console.log(props)}
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItems;
