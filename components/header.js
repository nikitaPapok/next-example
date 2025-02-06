import Link from 'next/link'
import Image from 'next/image'
import styles from './header.module.css'
import logo from '@/assets/logo.png'
import NavLink from './nav-link'



export default function Header() {
  return <header className={styles.header}>
    <Link href="/" className={styles.logo}>
      <Image src={logo} alt='logo ' priority />
      Next level food
    </Link>
    <nav className={styles.nav}>
      <ul >
        <li><NavLink href="/meals">Meals</NavLink></li>
        <li><NavLink href="/meals/share">Share</NavLink></li>
        <li><NavLink href="/community">Community</NavLink></li>
      </ul>
    </nav>
  </header>
}