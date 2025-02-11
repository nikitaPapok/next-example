import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";
export function MealsGrid({ meals }) {
  return (
    <ul className={classes.meals}>
      <p>aaa</p>
      {meals.map((meal) => {
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>;
      })}
    </ul>
  );
}
