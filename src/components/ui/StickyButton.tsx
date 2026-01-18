import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from './Button'

const CALENDLY_URL = 'https://calendly.com/desplat72/nouvelle-reunion'

export function StickyButton() {
  const { scrollYProgress } = useScroll()

  // Only show after scrolling past hero (after ~30% of first viewport)
  const opacity = useTransform(scrollYProgress, [0, 0.08, 0.1], [0, 0, 1])
  const y = useTransform(scrollYProgress, [0, 0.08, 0.1], [20, 20, 0])

  return (
    <motion.div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:max-w-[430px] w-full px-4"
      style={{ opacity, y }}
    >
      <div className="relative">
        {/* Backdrop blur effect */}
        <div className="absolute inset-0 bg-dark-900/80 backdrop-blur-lg rounded-full -m-1" />

        <Button
          href={CALENDLY_URL}
          variant="primary"
          size="lg"
          pulse
          className="w-full shadow-2xl"
        >
          <span className="text-lg">🔥</span>
          Réserver mon appel gratuit
        </Button>
      </div>
    </motion.div>
  )
}
