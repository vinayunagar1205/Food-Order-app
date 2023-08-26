import React, { Fragment } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Shahi paneer",
    description:
      "shahi paneer is a cheese curry ",
    price: 4.00,
  },
  {
    id: "m2",
    name: "Masala dosa",
    description:
      "made from a batter of soaked rice ",
    price: 15.00,
  },
  {
    id: "m3",
    name: "Pav bhaji",
    description:
      "Pav bhaji is a popular street snack.",
    price: 3.00,
  },
  {
    id: "m4",
    name: "Rajma",
    description:
      "Rajma is one of the popular vegetarian dishes of North India",
    price: 2.00,
  },
  {
    id: "m5",
    name: "Dal-vada",
    description:
      "dal vada is one of the popular vegetarian snacks",
    price: 2.00,
  },
  {
    id: "m6",
    name: "momos",
    description:
      "momos is snack(veg or non-veg)",
    price: 2.00,
  },
];

export default function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}
