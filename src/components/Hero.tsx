import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Ambient background orbs */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.orb3} />

      <div className={styles.content}>
        <p className={styles.eyebrow}>✦ Music that lifts you up</p>
        <h1 className={styles.title}>
          <span className={styles.line1}>LIFTED</span>
          <span className={styles.line2}>SOUND</span>
        </h1>
        <p className={styles.mission}>
          Modern, uplifting music that helps young people feel
          <br />
          <em>connected, valued, and empowered.</em>
        </p>
        <div className={styles.actions}>
          <a href="#releases" className={styles.btnPrimary}>
            Explore Releases
          </a>
          <a href="#about" className={styles.btnGhost}>
            Our Story
          </a>
        </div>

        {/* Scroll cue */}
        <div className={styles.scrollCue}>
          <span />
        </div>
      </div>

      {/* Floating note particles */}
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
