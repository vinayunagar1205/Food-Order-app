import React, {Fragment} from 'react'
import classes from './MealsSummary.module.css';

export default function MealsSummary() {
  return (
    <section className={classes.summary}>
        <h2>Delicious Food, Delivered To You</h2>
            <p>Your go-to spot for delicious eats 🍔</p>
            <p>Creating food that brings people together 🌟</p>
            <p>The ideal blend of taste and tradition 🍝</p>
            <p>Serving up fresh, local ingredients 🌱</p>
            <p>Come for the food, stay for the atmosphere 🍻</p>
    </section>
  )
}
