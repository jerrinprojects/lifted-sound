import { releases } from '../data/releases'
import styles from './Releases.module.css'

export default function Releases() {
  return (
    <section id="releases" className={styles.section}>
      <div className={styles.header}>
        <p className={styles.label}>✦ Discography</p>
        <h2 className={styles.title}>Our Music</h2>
        <p className={styles.sub}>Every track is a story. Every song, an invitation.</p>
      </div>

      <div className={styles.grid}>
        {releases.map((release, i) => (
          <article
            key={release.id}
            className={styles.card}
            style={{ '--delay': `${i * 0.1}s`, '--accent': release.accent } as React.CSSProperties}
          >
            {/* Album art placeholder */}
            <div className={styles.artwork} style={{ background: release.gradient }}>
              <div className={styles.artworkInner}>
                <span className={styles.artworkNote}>♫</span>
                <span className={styles.artworkTitle}>{release.title}</span>
              </div>
              <div className={styles.artworkShine} />
            </div>

            <div className={styles.info}>
              <div className={styles.meta}>
                <span className={styles.type}>{release.type}</span>
                <span className={styles.year}>{release.year}</span>
              </div>
              <h3 className={styles.name}>{release.title}</h3>
              <p className={styles.desc}>{release.description}</p>
              <div className={styles.footer}>
                <span className={styles.tracks}>{release.tracks} {release.tracks === 1 ? 'track' : 'tracks'}</span>
                <button className={styles.play}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                    <path d="M2 1.5l10 5.5-10 5.5V1.5z" />
                  </svg>
                  Listen
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
