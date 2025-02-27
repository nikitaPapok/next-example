import fs from "fs";
import path from "path";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug =? ").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  // Get the file extension
  const extension = meal.file.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`; // Name the file using meal slug
  const dirPath = path.join(process.cwd(), "public", "images"); // Resolve directory path

  // Ensure the directory exists
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  // Convert file to Buffer
  const bufferImage = Buffer.from(await meal.file.arrayBuffer());

  // Define full file path
  const filePath = path.join(dirPath, fileName);

  // Write file asynchronously
  await fs.promises.writeFile(filePath, bufferImage);

  // Store the relative file path in the meal object
  meal.file = `/images/${fileName}`;
  console.log(meal);

  db.prepare(
    `
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug )
    VALUES(
        @title,
        @summary,
        @instructions,
        @name,
        @email,
        @file,
        @slug
        )
    `
  ).run(meal);
}
