import Link from "next/link";
import classes from "./page.module.css";
import { Suspense } from "react";
import { MealsGrid } from "@/components/meals/meals-grid";
import { getMeals } from "@/utils/meals";

export const metadata = {
  title: "mealse",
  description: "Delicious meals, shared by a food-loving community.",
};

async function GetMealComponent() {
  const mealsArray = await getMeals();
  return <MealsGrid meals={mealsArray} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>Delicious meals, created</h1>{" "}
        <span className={classes.highlight}>by you</span>
        <p>Choose your favorite recepie and cooke it with ease and fun</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite recepit</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Loading...</p>}>
          <GetMealComponent />
        </Suspense>
      </main>
    </>
  );
}
