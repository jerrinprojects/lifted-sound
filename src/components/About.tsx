import styles from './About.module.css'

export default function About() {
  const values = [
    { icon: '🎵', label: 'Connection', desc: 'Music that closes the distance between people.' },
    { icon: '💜', label: 'Belonging', desc: 'A sound that says: you are not alone.' },
    { icon: '⚡', label: 'Empowerment', desc: 'Songs that remind you of your own strength.' },
    { icon: '🌍', label: 'Unity', desc: 'Bringing every generation together through singing.' },
  ]

  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <p className={styles.label}>✦ Who We Are</p>
          <h2 className={styles.title}>Music With a Mission</h2>
          <p className={styles.body}>
            Lifted Sound creates modern, uplifting music that helps young people feel
            connected, valued, and empowered. We believe in the power of a song to
            inspire hope, spark belonging, and build strength — while bringing people
            of all ages together through the act of singing.
          </p>
          <a href="#releases" className={styles.btn}>Hear Our Story</a>
        </div>

        <div className={styles.values}>
          {values.map((v) => (
            <div key={v.label} className={styles.valueCard}>
              <span className={styles.valueIcon}>{v.icon}</span>
              <div>
                <strong className={styles.valueName}>{v.label}</strong>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
