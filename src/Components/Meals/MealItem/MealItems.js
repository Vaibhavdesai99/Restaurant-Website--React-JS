import React from "react";
import MealItemForm from "./MealItemForm";
import classes from "./MealItems.module.css";
const MealItems = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li>
      <div className={classes.meals}>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        {console.log(props)}
        <MealItemForm id={props.id} item={props} />
      </div>
    </li>
  );
};

export default MealItems;
