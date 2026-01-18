import { motion, useScroll, useTransform } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface PhoneMockupProps {
  children: ReactNode
  parallaxOffset?: number
}

export function PhoneMockup({ children, parallaxOffset = 50 }: PhoneMockupProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [parallaxOffset, -parallaxOffset])

  return (
    <motion.div
      ref={ref}
      className="phone-frame mx-auto w-[280px] max-w-full"
      style={{ y }}
    >
      {/* Phone notch */}
      <div className="phone-notch" />

      {/* Phone screen */}
      <div className="phone-screen aspect-[9/16] relative overflow-hidden">
        {children}
      </div>

      {/* Home indicator */}
      <div className="w-32 h-1 bg-white/20 rounded-full mx-auto mt-2" />
    </motion.div>
  )
}
