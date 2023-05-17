import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [ammountisValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submmitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    // added + in front of enteredAmount caz we need to convert string to number

    const enterdAmountNumber = +enteredAmount;

    if (
      enterdAmountNumber.toString().trim().length === 0 ||
      enterdAmountNumber < 1 ||
      enterdAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enterdAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submmitHandler}>
      {/* {console.log(cartcntx.items)} */}
      <Input
        ref={amountInputRef}
        label="Amount "
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
        }}
      />
      <button>+ Add</button>
      {!ammountisValid && <p>Please enter a valid amount.</p>}
    </form>
  );
};

export default MealItemForm;
