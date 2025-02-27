import Image from "next/image";
import classes from "./page.module.css";
import { getMeal } from "@/utils/meals";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const slug = params.slug;
  const currentMeal = getMeal(slug);
  if (!currentMeal) {
    notFound();
  }

  return {
    title: currentMeal.title,
  };
}

export default function MealPage({ params }) {
  const slug = params.slug;
  const currentMeal = getMeal(slug);

  if (!currentMeal) {
    notFound();
  }

  currentMeal.instructions = currentMeal.instructions.replace(/\n/g, "<br />");
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image
            src={currentMeal.image}
            fill
            alt={currentMeal.title}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30rem"
          />
        </div>
        <div className={classes.headerText}>
          <h1>{currentMeal.title}</h1>
          <p className={classes.creator}>
            {" "}
            by{" "}
            <a herf={`mailto:${currentMeal.creator_email}`}>
              {" "}
              {currentMeal.creator}
            </a>
          </p>
          <p className={classes.summary}> {currentMeal.summary} </p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: currentMeal.instructions }}
        ></p>
      </main>
    </>
  );
}
