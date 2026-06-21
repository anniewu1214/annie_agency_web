import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import styles from './Services.module.css'

interface ServiceItem {
  title: string
  tags: string
  description: string
  bullets: string[]
}

const services: ServiceItem[] = [
  {
    title: 'Brand Positioning & Market Entry',
    tags: 'Market Insight & Strategy | Cultural Translation | Strategic Execution',
    description:
      'We demystify the Chinese market for global premium brands. Our process is rooted in deep cultural translation and strategic rigor, ensuring your entry is not just an arrival, but a foundation for long-term growth.',
    bullets: [
      'Market Insight & Strategy: We analyze your brand DNA against local market dynamics to define a unique, resonant positioning.',
      'Cultural Translation: We adapt your global identity to ensure it feels both authentic to your heritage and relevant to the Chinese consumer.',
      'Strategic Execution: We map out a sustainable roadmap to launch your brand with clarity, authority, and impact.',
    ],
  },
  {
    title: 'PR Strategy & Media Relations',
    tags: 'Media Mapping | Narrative Crafting | Authority Building',
    description:
      'We build your brand\'s voice into a trusted authority. Our process is rooted in precise media curation and professional storytelling, ensuring your brand narrative resonates within China\'s premier outlets.',
    bullets: [
      'Media Mapping: We identify and connect with the media channels that align with your brand prestige.',
      'Narrative Crafting: We transform your brand milestones into compelling local stories that media professionals want to tell.',
      'Authority Building: We manage long-term relationships to ensure consistent, high-caliber presence.',
    ],
  },
  {
    title: 'Social Media Operations',
    tags: 'Platform Intelligence | Content Curation | Precision Growth',
    description:
      'We translate your brand identity into the language of China\'s digital ecosystem. Our process is rooted in aesthetic rigor and data-driven insights, ensuring your presence on WeChat and Xiaohongshu is both culturally authentic and commercially effective.',
    bullets: [
      'Platform Intelligence: We decode the behaviors of your target audience on China\'s core digital platforms.',
      'Content Curation: We produce high-fidelity visuals and copy that maintain your international brand standards while adapting to local aesthetics.',
      'Precision Growth: We optimize digital placements and social interactions to drive measurable, high-quality audience engagement.',
    ],
  },
  {
    title: 'Spatial Curation & Brand Experience',
    tags: 'Spatial Concept | Narrative Design | Immersive Execution',
    description:
      'We bring your brand\'s world to life. Our process is rooted in spatial storytelling and exquisite detail, ensuring every offline encounter is a seamless, sensory extension of your global brand identity.',
    bullets: [
      'Spatial Concept: We translate your brand DNA into a physical space that commands presence.',
      'Narrative Design: We choreograph the consumer\'s journey, ensuring every touchpoint tells a cohesive story.',
      'Immersive Execution: We oversee the technical and aesthetic production, delivering a high-impact experience.',
    ],
  },
]

function AccordionItem({
  title,
  tags,
  description,
  bullets,
}: ServiceItem) {
  const [open, setOpen] = useState(false)
  const ref = useReveal(0.1, `0px 0px -24px 0px`)

  return (
    <div ref={ref} className={`reveal ${styles.item}`}>
      <button
        className={styles.header}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{title}</span>
        <span className={open ? styles.toggleOpen : styles.toggle}>+</span>
      </button>
      <div className={`${styles.body} ${open ? styles.bodyOpen : ''}`}>
        <div className={styles.tags}>{tags}</div>
        <p className={styles.description}>{description}</p>
        <ul className={styles.bullets}>
          {bullets.map((bullet, i) => (
            <li key={i} className={styles.bullet}>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function Services() {
  const introRef = useReveal(0.2)

  return (
    <div className={styles.page}>
      <section ref={introRef} className={`reveal ${styles.intro}`}>
        <h1 className={styles.heading}>
          Crafting Presence in the Chinese Market
        </h1>
        <p className={styles.paragraph}>
          We navigate the intersection of strategy and aesthetic to elevate your
          brand's voice in China. From market entry and PR relations to
          digital operations and spatial design, we curate every touchpoint with
          rigorous attention to detail — transforming global vision into
          local resonance.
        </p>
      </section>

      <section className={styles.accordion}>
        {services.map((service) => (
          <AccordionItem key={service.title} {...service} />
        ))}
      </section>
    </div>
  )
}

export default Services
