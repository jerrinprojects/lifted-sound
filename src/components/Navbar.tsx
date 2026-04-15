import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#" className={styles.logo}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/lifted-sound.firebasestorage.app/o/assets%2Flogo.png?alt=media"
          alt="Lifted Sound"
          className={styles.logoImg}
        />
      </a>
      <ul className={styles.links}>
        <li><a href="#releases">Releases</a></li>
        <li><a href="#about">About</a></li>
        <li>
          <a href="#releases" className={styles.cta}>Listen Now</a>
        </li>
      </ul>
    </nav>
  )
}
