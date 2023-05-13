import React from 'react';
import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h1 className={classes.title}>
        Delicious Food Delivered to You
      </h1>
      <p className={classes.description}>
        Choose your favourite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.
      </p>
      <p className={classes.info}>
        All our meals are cooked with high-quality ingredients just-in-time and of course by experienced chefs 👩‍🍳 !
      </p>
    </section>
  );
};

export default MealsSummary;
