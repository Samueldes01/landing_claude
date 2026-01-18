import { motion } from 'framer-motion'
import { Button } from '../ui/Button'

const CALENDLY_URL = 'https://calendly.com/desplat72/nouvelle-reunion'

export function FinalCTA() {
  return (
    <section className="py-20 px-5 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-orange-600/10 rounded-full blur-[80px]"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-500/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated icon */}
          <motion.div
            className="relative w-20 h-20 mx-auto mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            {/* Rotating ring */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-orange-500/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-2 rounded-xl border border-orange-500/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            />

            {/* Center icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.span
                className="text-4xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🚀
              </motion.span>
            </div>
          </motion.div>

          {/* Headline with animation */}
          <motion.h2
            className="text-2xl font-bold text-white mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3 }}
          >
            Prêt à passer au
          </motion.h2>
          <motion.h2
            className="text-2xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-gradient">niveau supérieur</span> ?
          </motion.h2>

          {/* Subtext */}
          <motion.p
            className="text-gray-400 text-sm mb-8 max-w-xs mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.5 }}
          >
            Réserve ton appel découverte gratuit de 30 minutes et discutons de tes objectifs.
          </motion.p>

          {/* CTA Button with extra emphasis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.6 }}
            className="relative"
          >
            {/* Glow behind button */}
            <div className="absolute inset-0 bg-orange-500/20 blur-xl rounded-full scale-110" />

            <Button href={CALENDLY_URL} variant="primary" size="lg" pulse>
              <span>🔥</span>
              Réserver mon appel gratuit
            </Button>
          </motion.div>

          {/* Trust badges with staggered animation */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { icon: '✓', text: 'Sans engagement' },
              { icon: '⏱', text: '30 min' },
              { icon: '💬', text: '100% gratuit' },
            ].map((badge, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2 text-gray-500 text-xs"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                whileHover={{ scale: 1.05, color: '#FF6B00' }}
              >
                <span className="w-5 h-5 rounded-full bg-dark-700 flex items-center justify-center text-[10px]">
                  {badge.icon}
                </span>
                <span>{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Urgency note */}
          <motion.p
            className="mt-6 text-orange-400/60 text-xs"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 1.2 }}
            animate={{ opacity: [0.6, 1, 0.6] }}
          >
            Places limitées chaque semaine
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
