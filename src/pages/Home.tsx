import { useReveal } from '../hooks/useReveal'
import Carousel from '../components/Carousel'
import styles from './Home.module.css'

const pillars = ['BRAND STRATEGY', 'PRECISION GROWTH', 'MARKET INSIGHT']

const projectCases = [
  { src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80', alt: 'HAY Market Launch — Shanghai Showroom' },
  { src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80', alt: 'Louis Poulsen — Beijing Exhibition' },
  { src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&q=80', alt: '&Tradition — Digital Campaign' },
  { src: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=1200&q=80', alt: 'Flos — Spatial Installation' },
  { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', alt: 'Audo — Pop-up Experience' },
]

function Home() {
  const pillarRef = useReveal(0.3)
  const carouselRef = useReveal(0.1)

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div ref={pillarRef} className={`reveal ${styles.pillars}`}>
          {pillars.map((pillar, i) => (
            <span key={pillar} className={styles.pillarWrap}>
              {i > 0 && <span className={styles.divider} />}
              <h2 className={styles.pillar}>{pillar}</h2>
            </span>
          ))}
        </div>
        <p className={styles.subtitle}>
          Bridging global vision with local resonance
        </p>
      </section>

      <section ref={carouselRef} className={`reveal ${styles.carouselSection}`}>
        <Carousel images={projectCases} autoPlay interval={4500} />
      </section>
    </div>
  )
}

export default Home
