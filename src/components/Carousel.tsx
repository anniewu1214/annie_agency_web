import { useState, useEffect, useCallback } from 'react'
import styles from './Carousel.module.css'

interface CarouselProps {
  images: { src: string; alt: string }[]
  autoPlay?: boolean
  interval?: number
  aspectRatio?: string
  imageWidth?: number
  imageHeight?: number
}

function Carousel({
  images,
  autoPlay = false,
  interval = 5000,
  aspectRatio = '16 / 10',
  imageWidth = 1200,
  imageHeight = 750,
}: CarouselProps) {
  const [current, setCurrent] = useState(0)
  const total = images.length

  const goTo = useCallback(
    (index: number) => {
      setCurrent(((index % total) + total) % total)
    },
    [total]
  )

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  useEffect(() => {
    if (!autoPlay || total <= 1) return
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % total)
    }, interval)
    return () => clearInterval(timer)
  }, [autoPlay, interval, total])

  if (total === 0) return null

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.track}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, i) => (
          <div key={i} className={styles.slide}>
            <img
              className={styles.image}
              src={img.src}
              alt={img.alt}
              width={imageWidth}
              height={imageHeight}
              loading={i === 0 ? 'eager' : 'lazy'}
              style={{ aspectRatio }}
            />
          </div>
        ))}
      </div>

      {total > 1 && (
        <>
          <button
            className={`${styles.arrow} ${styles.arrowPrev}`}
            onClick={prev}
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            className={`${styles.arrow} ${styles.arrowNext}`}
            onClick={next}
            aria-label="Next image"
          >
            ›
          </button>
          <div className={styles.dots}>
            {images.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Carousel
