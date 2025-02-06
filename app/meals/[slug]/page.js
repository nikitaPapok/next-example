export default function MealPage({ params }) {
  const slug = params.slug

  return <main>
    <h1 style={{ color: 'white', textAlign: 'center' }}> This is page for {slug}</h1>
  </main >
}