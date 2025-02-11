import Link from "next/link";
import classes from "./page.module.css";
import { MealsGrid } from "@/components/meals/meals-grid";
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
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
