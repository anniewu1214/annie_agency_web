import { useReveal } from '../hooks/useReveal'
import Carousel from '../components/Carousel'
import styles from './Work.module.css'

const workItems = [
  {
    id: 1,
    images: [
      { src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80', alt: 'Social media strategy dashboard' },
      { src: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&q=80', alt: 'WeChat content creation' },
      { src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80', alt: 'Digital marketing team collaboration' },
      { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', alt: 'Analytics and growth metrics' },
    ],
    title: 'Social & Digital Growth',
    description:
      "Masterfully navigating China's core digital platforms—WeChat and Xiaohongshu. We fuse premium brand storytelling with data-driven precision, ensuring your brand achieves both aesthetic resonance and measurable online visibility.",
  },
  {
    id: 2,
    images: [
      { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80', alt: 'PR strategy planning session' },
      { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80', alt: 'Media press conference' },
      { src: 'https://images.unsplash.com/photo-1559223607-a43c990c692c?w=800&q=80', alt: 'Magazine feature shoot' },
    ],
    title: 'Strategic PR & Media Relations',
    description:
      "Leveraging deep-rooted connections with China's premier media, we provide a strategic bridge for your brand. We ensure your new launches and key content reach relevant, high-impact outlets, securing consistent exposure and brand relevance in a crowded market.",
  },
  {
    id: 3,
    images: [
      { src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80', alt: 'Influencer partnership meeting' },
      { src: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80', alt: 'Fashion photoshoot production' },
      { src: 'https://images.unsplash.com/photo-1609357871098-40e0c93fb4a4?w=800&q=80', alt: 'Lifestyle content studio' },
      { src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80', alt: 'Celebrity brand collaboration' },
    ],
    title: 'Influencer & Celebrity Partnerships',
    description:
      'We bridge the gap between global brands and the Chinese market through precise talent curation and high-fidelity content production. By leveraging deep cultural insights, we orchestrate authentic collaborations—from influencers to celebrities—ensuring your brand narrative is expertly localized, visually compelling, and culturally resonant.',
  },
  {
    id: 4,
    images: [
      { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', alt: 'Modern exhibition space design' },
      { src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80', alt: 'Pop-up store installation' },
      { src: 'https://images.unsplash.com/photo-1502014822147-1aedfb0676e0?w=800&q=80', alt: 'Immersive brand experience' },
      { src: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80', alt: 'Curated brand lounge' },
    ],
    title: 'Spatial Curation & Brand Experience',
    description:
      'We transform brand essence into immersive physical realities. From bespoke pop-ups to curated brand crossovers, we design experiential narratives that bring your global identity to life in China. Every detail is crafted to ensure a seamless, high-impact connection between your brand and its audience.',
  },
]

function Work() {
  const titleRef = useReveal(0.2)

  return (
    <div className={styles.page}>
      <h1 ref={titleRef} className={`reveal ${styles.title}`}>
        Work
      </h1>
      <div className={styles.rows}>
        {workItems.map((item) => (
          <WorkRow key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

function WorkRow({
  item,
}: {
  item: (typeof workItems)[number]
}) {
  const ref = useReveal(0.1)

  return (
    <div ref={ref} className={`reveal ${styles.row}`}>
      <div className={styles.carouselCol}>
        <Carousel
          images={item.images}
          autoPlay
          interval={4000}
          aspectRatio="4 / 3"
          imageWidth={800}
          imageHeight={400}
        />
      </div>
      <div className={styles.textCol}>
        <h2 className={styles.cardTitle}>{item.title}</h2>
        <p className={styles.cardDescription}>{item.description}</p>
      </div>
    </div>
  )
}

export default Work
