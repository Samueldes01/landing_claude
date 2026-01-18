import { motion } from 'framer-motion'
import { Button } from '../ui/Button'

const CALENDLY_URL = 'https://calendly.com/desplat72/nouvelle-reunion'

// Animations optimisées GPU (transform + opacity uniquement)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-start pt-10 px-5 pb-8 relative overflow-hidden">
      {/* Background gradient statique pour performance */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-orange-500/15 rounded-full blur-[80px] pointer-events-none" />

      <motion.div
        className="relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Badge */}
        <motion.div variants={slideUp} className="mb-5">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
            Prépa Physique Basketball
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.div variants={slideUp} className="mb-5">
          <h1 className="text-[1.75rem] sm:text-3xl font-bold leading-[1.2] text-white">
            Passe au
          </h1>
          <h1 className="text-[1.75rem] sm:text-3xl font-bold leading-[1.2]">
            <span className="text-gradient">niveau supérieur</span>
          </h1>
          <h1 className="text-[1.75rem] sm:text-3xl font-bold leading-[1.2] text-white">
            sur le terrain
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={slideUp}
          className="text-gray-400 text-base mb-6 max-w-[320px] leading-relaxed"
        >
          Un accompagnement{' '}
          <span className="text-orange-400 font-semibold">de A à Z</span> :
          programme personnalisé, suivi via app, jusqu'à la{' '}
          <span className="text-orange-400 font-semibold">nutrition</span>.
        </motion.p>

        {/* Key points */}
        <motion.div variants={slideUp} className="flex flex-wrap gap-2 mb-6">
          {['Explosivité', 'Force', 'Nutrition'].map((item) => (
            <span
              key={item}
              className="px-3 py-1 rounded-full bg-dark-800 border border-dark-700 text-gray-300 text-xs font-medium"
            >
              {item}
            </span>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={slideUp}>
          <Button href={CALENDLY_URL} variant="primary" size="lg" pulse>
            <span>🔥</span>
            Réserver mon appel gratuit
          </Button>
        </motion.div>

        {/* Social proof */}
        <motion.div variants={fadeIn} className="flex items-center gap-3 mt-5">
          <div className="flex -space-x-2">
            {['🏀', '💪', '🎯'].map((emoji, i) => (
              <span
                key={i}
                className="w-7 h-7 rounded-full bg-dark-700 border-2 border-dark-900 flex items-center justify-center text-sm"
              >
                {emoji}
              </span>
            ))}
          </div>
          <p className="text-gray-500 text-xs">
            Appel de 30 min • Sans engagement
          </p>
        </motion.div>

        {/* Scroll indicator - juste en dessous */}
        <motion.div
          className="flex flex-col items-center mt-10"
          variants={fadeIn}
        >
          <div className="relative">
            {/* Phone frame */}
            <div className="w-7 h-12 rounded-lg border-2 border-gray-600 relative overflow-hidden">
              <div className="absolute inset-0.5 rounded bg-dark-800/50" />
              {/* Swipe line */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 w-0.5 h-3 bg-orange-500 rounded-full"
                animate={{ y: [12, 2, 12] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
            {/* Arrow */}
            <motion.div
              className="absolute -top-2 left-1/2 -translate-x-1/2"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="3" strokeLinecap="round">
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </motion.div>
          </div>
          <span className="text-gray-600 text-[9px] uppercase tracking-wider mt-2">Swipe</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
