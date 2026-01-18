import { motion } from 'framer-motion'
import { Button } from '../ui/Button'

const CALENDLY_URL = 'https://calendly.com/desplat72/nouvelle-reunion'

export function Hero() {
  return (
    <section className="min-h-[100svh] flex flex-col pt-10 px-5 pb-6 relative overflow-hidden">
      {/* Background gradient statique */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[280px] h-[280px] bg-orange-500/10 rounded-full blur-[60px] pointer-events-none" />

      <div className="relative z-10">
        {/* Badge */}
        <div className="mb-5 animate-slide-in" style={{ animationDelay: '0ms' }}>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
            Prépa Physique Basketball
          </span>
        </div>

        {/* Main headline */}
        <div className="mb-5 animate-slide-in" style={{ animationDelay: '80ms' }}>
          <h1 className="text-[1.75rem] sm:text-3xl font-bold leading-[1.2] text-white">
            Passe au
          </h1>
          <h1 className="text-[1.75rem] sm:text-3xl font-bold leading-[1.2]">
            <span className="text-gradient">niveau supérieur</span>
          </h1>
          <h1 className="text-[1.75rem] sm:text-3xl font-bold leading-[1.2] text-white">
            sur le terrain
          </h1>
        </div>

        {/* Subtitle */}
        <p
          className="text-gray-400 text-base mb-6 max-w-[320px] leading-relaxed animate-slide-in"
          style={{ animationDelay: '160ms' }}
        >
          Un accompagnement{' '}
          <span className="text-orange-400 font-semibold">de A à Z</span> :
          programme personnalisé, suivi via app, jusqu'à la{' '}
          <span className="text-orange-400 font-semibold">nutrition</span>.
        </p>

        {/* Key points */}
        <div className="flex flex-wrap gap-2 mb-6 animate-slide-in" style={{ animationDelay: '240ms' }}>
          {['Explosivité', 'Force', 'Nutrition'].map((item) => (
            <span
              key={item}
              className="px-3 py-1 rounded-full bg-dark-800 border border-dark-700 text-gray-300 text-xs font-medium"
            >
              {item}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <div className="animate-slide-in" style={{ animationDelay: '320ms' }}>
          <Button href={CALENDLY_URL} variant="primary" size="lg" pulse>
            <span>🔥</span>
            Réserver mon appel gratuit
          </Button>
        </div>

        {/* Social proof */}
        <div className="flex items-center gap-3 mt-5 animate-slide-in" style={{ animationDelay: '400ms' }}>
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
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center mt-auto pt-8 animate-fade-in" style={{ animationDelay: '600ms' }}>
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
        </div>
      </div>
    </section>
  )
}
