import { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

interface UseCountUpOptions {
  end: number
  duration?: number
  delay?: number
  suffix?: string
  prefix?: string
}

export function useCountUp({
  end,
  duration = 2000,
  delay = 0,
  suffix = '',
  prefix = '',
}: UseCountUpOptions) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!inView || hasAnimated.current) return
    hasAnimated.current = true

    const startTime = Date.now() + delay
    const endTime = startTime + duration

    const animate = () => {
      const now = Date.now()

      if (now < startTime) {
        requestAnimationFrame(animate)
        return
      }

      if (now >= endTime) {
        setCount(end)
        return
      }

      const progress = (now - startTime) / duration
      // Easing function: easeOutQuart
      const eased = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(eased * end))
      requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [inView, end, duration, delay])

  return {
    ref,
    value: `${prefix}${count}${suffix}`,
    rawValue: count,
  }
}
