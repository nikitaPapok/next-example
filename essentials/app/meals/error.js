"use client";

export default function MealsErrorComponent({ error }) {
  return (
    <main className="error">
      <h1>An error Occured</h1>
      <p>Some problems with extracting meals. Try again {error.message}</p>
    </main>
  );
}
