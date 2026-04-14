import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} />

      <div className={styles.content}>
        <p className={styles.eyebrow}>✦ Music that lifts you up</p>
        <h1 className={styles.title}>
          <span className={styles.line1}>LIFTED</span>
          <span className={styles.line2}>SOUND</span>
        </h1>
        <p className={styles.mission}>
          Modern, uplifting music that helps young people feel{' '}
          <strong>connected, valued, and empowered.</strong>
        </p>
        <div className={styles.actions}>
          <a href="#releases" className={styles.btnPrimary}>
            Explore Releases
          </a>
          <a href="#about" className={styles.btnGhost}>
            Our Story
          </a>
        </div>
        <div className={styles.scrollCue}>
          <span />
        </div>
      </div>

      <div className={styles.particles} aria-hidden>
        {['♪', '♫', '♩', '♬', '♭', '♯'].map((note, i) => (
          <span key={i} className={styles.note} style={{ '--i': i } as React.CSSProperties}>
            {note}
          </span>
        ))}
      </div>
    </section>
  )
}
