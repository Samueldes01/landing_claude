import { motion } from 'framer-motion'
import { Button } from '../ui/Button'

const CALENDLY_URL = 'https://calendly.com/desplat72/nouvelle-reunion'

// Animations d'entrée élégantes
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
}

const titleLineVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
}

const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
}

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: 'easeOut' }
  })
}

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-start pt-10 px-5 pb-24 relative overflow-hidden">
      {/* Background gradient animé - apparaît en fondu */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-orange-500/20 rounded-full blur-[100px] pointer-events-none"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />
      <motion.div
        className="absolute top-1/3 right-0 w-[200px] h-[200px] bg-orange-600/10 rounded-full blur-[80px] pointer-events-none"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
      />

      <motion.div
        className="relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Badge avec animation scale */}
        <motion.div variants={scaleIn} className="mb-5">
          <motion.span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              className="w-1.5 h-1.5 bg-orange-500 rounded-full"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            Prépa Physique Basketball
          </motion.span>
        </motion.div>

        {/* Main headline - chaque ligne apparaît séparément avec blur */}
        <div className="mb-5 overflow-hidden">
          <motion.h1
            variants={titleLineVariants}
            className="text-[1.75rem] sm:text-3xl font-bold leading-[1.2] text-white"
          >
            Passe au
          </motion.h1>
          <motion.h1
            variants={titleLineVariants}
            className="text-[1.75rem] sm:text-3xl font-bold leading-[1.2]"
          >
            <span className="text-gradient">niveau supérieur</span>
          </motion.h1>
          <motion.h1
            variants={titleLineVariants}
            className="text-[1.75rem] sm:text-3xl font-bold leading-[1.2] text-white"
          >
            sur le terrain
          </motion.h1>
        </div>

        {/* Subtitle avec fade élégant */}
        <motion.p
          variants={fadeInUp}
          className="text-gray-400 text-base mb-6 max-w-[320px] leading-relaxed"
        >
          Un accompagnement{' '}
          <span className="text-orange-400 font-semibold">de A à Z</span> :
          programme personnalisé, suivi via app, jusqu'à la{' '}
          <span className="text-orange-400 font-semibold">nutrition</span>.
        </motion.p>

        {/* Key points - apparaissent un par un */}
        <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 mb-6">
          {['Explosivité', 'Force', 'Nutrition'].map((item, i) => (
            <motion.span
              key={item}
              custom={i}
              variants={tagVariants}
              className="px-3 py-1 rounded-full bg-dark-800 border border-dark-700 text-gray-300 text-xs font-medium"
              whileHover={{ scale: 1.05, borderColor: '#FF6B00' }}
            >
              {item}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA Button avec apparition spéciale */}
        <motion.div
          variants={fadeInUp}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button href={CALENDLY_URL} variant="primary" size="lg" pulse>
            <span>🔥</span>
            Réserver mon appel gratuit
          </Button>
        </motion.div>

        {/* Social proof */}
        <motion.div variants={fadeInUp} className="flex items-center gap-3 mt-5">
          <div className="flex -space-x-2">
            {['🏀', '💪', '🎯'].map((emoji, i) => (
              <motion.span
                key={i}
                className="w-7 h-7 rounded-full bg-dark-700 border-2 border-dark-900 flex items-center justify-center text-sm"
                initial={{ opacity: 0, scale: 0, x: -10 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 1.2 + i * 0.1, duration: 0.3 }}
              >
                {emoji}
              </motion.span>
            ))}
          </div>
          <motion.p
            className="text-gray-500 text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            Appel de 30 min • Sans engagement
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator - Phone swipe */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        {/* Phone icon with swipe gesture */}
        <div className="relative">
          {/* Phone frame */}
          <div className="w-8 h-14 rounded-xl border-2 border-gray-600 relative overflow-hidden">
            {/* Screen */}
            <div className="absolute inset-1 rounded-lg bg-dark-800/50" />
            {/* Swipe line */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-0.5 h-4 bg-orange-500 rounded-full"
              animate={{ y: [16, 4, 16] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
          {/* Swipe arrow */}
          <motion.div
            className="absolute -top-3 left-1/2 -translate-x-1/2"
            animate={{ y: [0, -4, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </motion.div>
        </div>
        <span className="text-gray-500 text-[10px] uppercase tracking-wider">Swipe</span>
      </motion.div>
    </section>
  )
}
