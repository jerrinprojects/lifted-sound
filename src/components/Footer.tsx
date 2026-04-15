import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.glow} />
      <div className={styles.inner}>
        <div className={styles.brand}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/lifted-sound.firebasestorage.app/o/assets%2Flogo.png?alt=media"
            alt="Lifted Sound"
            className={styles.logoImg}
          />
          <p className={styles.tagline}>Inspiring hope, belonging & strength — through music.</p>
        </div>
        <nav className={styles.nav}>
          <a href="#releases">Releases</a>
          <a href="#about">About</a>
        </nav>
      </div>
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Lifted Sound. All rights reserved.</p>
      </div>
    </footer>
  )
}
