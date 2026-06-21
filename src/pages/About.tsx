import { useReveal } from '../hooks/useReveal'
import styles from './About.module.css'

function About() {
  const headingRef = useReveal(0.2)
  const imageRef = useReveal(0.15)
  const textRef = useReveal(0.15)

  return (
    <div className={styles.page}>
      <h1 ref={headingRef} className={`reveal ${styles.heading}`}>
        About
      </h1>
      <div className={styles.layout}>
        <div ref={imageRef} className={`reveal ${styles.imageCol}`}>
          <img
            className={styles.portrait}
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80"
            alt="Annie Wu — Founder & Creative Director"
            width={480}
            height={640}
          />
        </div>
        <div ref={textRef} className={`reveal ${styles.textCol}`}>
          <h2 className={styles.name}>
            Annie Wu — Founder & Creative Director
          </h2>
          <div className={styles.bio}>
            <p>
              Founder Annie Wu bridges the gap between global design philosophy
              and the intricacies of the Chinese market. With an academic
              foundation in design and cultural studies, Annie possesses a rare
              ability to decode the nuances of consumer behavior across Eastern
              and Western markets.
            </p>
            <p>
              Her professional journey includes leadership roles at some of the
              world's most iconic design houses—including HAY, &amp;Tradition,
              Louis Poulsen, Fritz Hansen, Audo, B&amp;B Italia, and Flos.
              Across these tenures, she spearheaded successful market entries
              and long-term operations, consistently guiding premium brands from
              initial launch to full-scale market maturity in China.
            </p>
            <p>
              Annie specializes in crafting 360-degree brand roadmaps that
              preserve a distinct luxury identity while achieving deep local
              resonance. Her expertise encompasses the full spectrum of market
              entry: from strategic positioning and complex channel management
              to high-conversion digital growth. By integrating authoritative PR
              relations, refined spatial experiences, and precision marketing,
              she empowers global brands to navigate the complexities of the
              Chinese market with clarity, authority, and sustained impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
