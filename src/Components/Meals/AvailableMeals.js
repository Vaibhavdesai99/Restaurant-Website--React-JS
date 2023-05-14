import React from "react";
import classes from "./AvailableMeals.module.css";
import MealItems from "./MealItem/MealItems";
import Card from "../UI/Card";
const Dummy_Meals = [
  {
    id: "m1",
    name: "Veg-Kolhapuri",
    description: "spicy and tasty",
    price: 40.3,
  },
  {
    id: "m2",
    name: "Chicken Handi",
    description: "Roasted and spicy",
    price: 30.3,
  },
  {
    id: "m3",
    name: "Paneer Masala",
    description: "A Pune Speciality",
    price: 20.27,
  },
  {
    id: "m4",
    name: "Chicken Lolipop",
    description: "Restaurant special dish",
    price: 70.32,
  },
];

const AvailableMeals = () => {
  const Mealslist = Dummy_Meals.map((meal) => {
    return (
      <MealItems
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{Mealslist}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
