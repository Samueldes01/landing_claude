import { motion } from 'framer-motion'
import { Button } from '../ui/Button'

const CALENDLY_URL = 'https://calendly.com/desplat72/nouvelle-reunion'

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-5 py-10 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-1/4 w-2 h-2 bg-orange-500/40 rounded-full"
          animate={{
            y: [0, -30, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-40 right-1/4 w-3 h-3 bg-orange-500/30 rounded-full"
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute top-60 left-1/3 w-1.5 h-1.5 bg-orange-400/50 rounded-full"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
      </div>

      {/* Background gradient accent */}
      <motion.div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-orange-500/10 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10">
        {/* Badge with glow effect */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-5"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium shadow-lg shadow-orange-500/5">
            <motion.span
              className="w-1.5 h-1.5 bg-orange-500 rounded-full"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Prépa Physique Basketball
          </span>
        </motion.div>

        {/* Main headline - Taille réduite pour mobile */}
        <div className="mb-5">
          <motion.h1
            className="text-[1.75rem] sm:text-3xl font-bold leading-[1.2] text-white"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Passe au
          </motion.h1>
          <motion.h1
            className="text-[1.75rem] sm:text-3xl font-bold leading-[1.2]"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <span className="text-gradient">niveau supérieur</span>
          </motion.h1>
          <motion.h1
            className="text-[1.75rem] sm:text-3xl font-bold leading-[1.2] text-white"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            sur le terrain
          </motion.h1>
        </div>

        {/* Subtitle with A-Z mention */}
        <motion.p
          className="text-gray-400 text-base mb-6 max-w-[320px] leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Un accompagnement{' '}
          <span className="text-orange-400 font-semibold">de A à Z</span> :
          programme personnalisé, suivi via app, jusqu'à la{' '}
          <span className="text-orange-400 font-semibold">nutrition</span>.
        </motion.p>

        {/* Key points with staggered animation */}
        <motion.div
          className="flex flex-wrap gap-2 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          {['Explosivité', 'Force', 'Nutrition'].map((item, index) => (
            <motion.span
              key={item}
              className="px-3 py-1 rounded-full bg-dark-800 border border-dark-700 text-gray-300 text-xs font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.05, borderColor: 'rgba(255, 107, 0, 0.3)' }}
            >
              {item}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <Button href={CALENDLY_URL} variant="primary" size="lg" pulse>
            <span>🔥</span>
            Réserver mon appel gratuit
          </Button>
        </motion.div>

        {/* Social proof hint */}
        <motion.div
          className="flex items-center gap-3 mt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <div className="flex -space-x-2">
            {['🏀', '💪', '🎯'].map((emoji, i) => (
              <motion.span
                key={i}
                className="w-7 h-7 rounded-full bg-dark-700 border-2 border-dark-900 flex items-center justify-center text-sm"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5 + i * 0.1, type: 'spring' }}
              >
                {emoji}
              </motion.span>
            ))}
          </div>
          <p className="text-gray-500 text-xs">
            Appel de 30 min • Sans engagement
          </p>
        </motion.div>
      </div>

    </section>
  )
}
