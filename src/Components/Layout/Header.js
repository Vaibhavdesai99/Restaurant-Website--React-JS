import React from "react";
import FoodImg from "../../Images/AdobeStock_338951876_Preview.jpeg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Epic Eateries</h1>
        {/* here we received that onShowCart func and again we passdown to button, onClick is just name here. */}
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={FoodImg} alt="foodimg"></img>
      </div>
    </>
  );
};

export default Header;
