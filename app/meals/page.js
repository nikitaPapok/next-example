import Link from "next/link"
export default function MealsPage() {
  return <main><h1 style={{ color: 'white', textAlign: 'center' }}>Meals Page</h1>
    <p style={{ color: 'white', textAlign: 'center' }}><Link href="/meals/share">Go to Share Page</Link></p>
    <p style={{ color: 'white', textAlign: 'center' }}><Link href="/meals/meal-1">Go to meal 1</Link></p>
  </main>
}