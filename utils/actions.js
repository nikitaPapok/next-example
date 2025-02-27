"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

export async function shareMeal(prevValue, formData) {
  const data = Object.fromEntries(formData.entries());
  if (!data.name.trim().length) {
    return { message: "Name must not be empty" };
  }
  await saveMeal(data);
  revalidatePath("/meals");
  redirect("/meals");
}
