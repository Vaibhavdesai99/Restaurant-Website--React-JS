import React, { useContext } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import CartContext from "../../../Store/Cartcontext";

const MealItemForm = (props) => {
  const cartcntx = useContext(CartContext);
  // console.log("reinitalized", cartcntx);

  const addItemToCart = (event) => {
    event.preventDefault();

    const quantity = document.getElementById("amount_" + props.id).value;
    cartcntx.addItem({ ...props.item, quantity: quantity });
  };

  return (
    <form className={classes.form}>
      {/* {console.log(cartcntx.items)} */}
      <Input
        label="Amount "
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
        }}
      />
      <button onClick={addItemToCart}> + Add</button>
    </form>
  );
};

export default MealItemForm;
