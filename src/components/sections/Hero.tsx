import { motion } from 'framer-motion'
import { Button } from '../ui/Button'

const CALENDLY_URL = 'https://calendly.com/desplat72/nouvelle-reunion'

// Animations optimisées pour mobile (utilise transform uniquement)
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

const staggerChildren = {
  visible: {
    transition: { staggerChildren: 0.1 }
  }
}

export function Hero() {
  return (
    <section className="pt-8 pb-16 px-5 relative overflow-hidden">
      {/* Background gradient - simplifié pour mobile */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[250px] h-[250px] bg-orange-500/10 rounded-full blur-[80px] pointer-events-none" />

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
    </section>
  )
}
