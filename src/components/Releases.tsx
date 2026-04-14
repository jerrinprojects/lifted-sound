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
            style={{ '--delay': `${i * 0.08}s` } as React.CSSProperties}
          >
            {/* Album artwork — the color source for this card */}
            <div className={styles.artwork} style={{ background: release.gradient }}>
              <div className={styles.artworkInner}>
                <span className={styles.artworkNote}>♫</span>
                <span className={styles.artworkTitle}>{release.title}</span>
              </div>
              <div className={styles.artworkShine} />

              {/* Circular green play button — Spotify-style */}
              <div className={styles.playOverlay}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="#000">
                  <path d="M3 2.5l10 5.5-10 5.5V2.5z" />
                </svg>
              </div>
            </div>

            <div className={styles.info}>
              <h3 className={styles.name}>{release.title}</h3>
              <div className={styles.meta}>
                <span className={styles.type}>{release.type}</span>
                <span className={styles.year}>· {release.year}</span>
              </div>
              <p className={styles.desc}>{release.description}</p>
              <span className={styles.tracks}>{release.tracks} {release.tracks === 1 ? 'track' : 'tracks'}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
