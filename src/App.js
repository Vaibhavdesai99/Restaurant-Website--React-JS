import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

const App = () => {
  // here we use useState() to show and hide cartitems
  const [cartisShown, SetCartIsShown] = useState(false);

  const cartHandler = () => {
    SetCartIsShown(true);
  };

  const hideCartHandler = () => {
    SetCartIsShown(false);
  };
  return (
    <>
      {/* to hide we passed down func through props on close button as well as backdrop & modal */}
      {cartisShown && <Cart onCloseCart={hideCartHandler} />}

      {/* to show cartItem we passdown func via props when user click on cart Buton */}
      <Header onShowCart={cartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
};

export default App;
