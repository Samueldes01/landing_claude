import { motion } from 'framer-motion'
import { Button } from '../ui/Button'

const CALENDLY_URL = 'https://calendly.com/desplat72/nouvelle-reunion'

// Animations fluides pour mobile
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
}

const staggerChildren = {
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
}

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-5 pb-8 relative overflow-hidden">
      {/* Background gradient animé */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-orange-500/15 rounded-full blur-[100px] pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="relative z-10"
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
      >
        {/* Badge */}
        <motion.div variants={fadeInUp} className="mb-5">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
            Prépa Physique Basketball
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.div variants={fadeInUp} className="mb-5">
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
          variants={fadeInUp}
          className="text-gray-400 text-base mb-6 max-w-[320px] leading-relaxed"
        >
          Un accompagnement{' '}
          <span className="text-orange-400 font-semibold">de A à Z</span> :
          programme personnalisé, suivi via app, jusqu'à la{' '}
          <span className="text-orange-400 font-semibold">nutrition</span>.
        </motion.p>

        {/* Key points */}
        <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 mb-6">
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
        <motion.div variants={fadeInUp}>
          <Button href={CALENDLY_URL} variant="primary" size="lg" pulse>
            <span>🔥</span>
            Réserver mon appel gratuit
          </Button>
        </motion.div>

        {/* Social proof */}
        <motion.div variants={fadeInUp} className="flex items-center gap-3 mt-5">
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
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <span className="text-gray-500 text-xs">Scroll</span>
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center pt-2"
          animate={{ borderColor: ['#4B5563', '#FF6B00', '#4B5563'] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-1.5 bg-orange-500 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
