import { useEffect, useRef } from 'react'

export function useReveal(threshold = 0.15, rootMargin = '0px 0px -48px 0px') {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('reveal-visible')
          observer.unobserve(node)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return ref
}
