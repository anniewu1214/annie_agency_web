import styles from './Footer.module.css'

const description =
  'PlayAnnieTime is a dedicated creative consultancy, where precision strategy and aesthetic rigor converge to define the future of premium brands in China. Guided by deep market intellect and cultural fluency, we create work that bridges global vision with local resonance, seamlessly integrating brand storytelling, authoritative PR, and spatial experiences to leave a lasting imprint across the market.'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.brand}>PlayAnnieTime</div>
          <div className={styles.tagline}>Branding and Consultant</div>
          <div className={styles.email}>
            <a href="mailto:info@playannietime.cn">
              info@playannietime.cn
            </a>
          </div>
        </div>
        <div className={styles.right}>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
