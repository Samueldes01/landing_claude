import { motion } from 'framer-motion'
import { useScrollAnimation, slideInLeft, staggerContainer, staggerItem } from '../../hooks/useScrollAnimation'

const credentials = [
  {
    icon: '🎓',
    title: 'Master Science de la Motricité',
    subtitle: 'Belgique',
  },
  {
    icon: '📜',
    title: "Certificat d'ingénierie",
    subtitle: 'Préparation physique',
  },
  {
    icon: '📚',
    title: 'Master Kinésithérapie',
    subtitle: 'En cours',
  },
]

export function About() {
  const { ref, controls } = useScrollAnimation()

  return (
    <section className="py-16 px-5">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={slideInLeft}
        className="text-center mb-8"
      >
        <h2 className="text-2xl font-bold text-white mb-2">
          Ton coach
        </h2>
      </motion.div>

      {/* Photo */}
      <motion.div
        className="relative w-48 h-48 mx-auto mb-6"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        {/* Glow effect behind */}
        <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-2xl" />

        {/* Photo container */}
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-orange-500/30 shadow-xl">
          <img
            src="/samuel-desplat.jpg"
            alt="Samuel DESPLAT"
            className="w-full h-full object-cover object-[center_30%]"
            onError={(e) => {
              // Fallback if image doesn't load
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
              target.parentElement!.innerHTML = `
                <div class="w-full h-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                  <span class="text-white text-4xl font-bold">SD</span>
                </div>
              `
            }}
          />
        </div>

        {/* Badge */}
        <motion.div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 bg-orange-500 rounded-full shadow-lg"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-white text-sm font-semibold whitespace-nowrap">
            🏀 Basketball
          </span>
        </motion.div>
      </motion.div>

      {/* Name and title */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-xl font-bold text-white mb-1">
          Samuel DESPLAT
        </h3>
        <p className="text-orange-400 font-medium">
          Préparateur Physique
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Spécialisé Basketball
        </p>
      </motion.div>

      {/* Credentials */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={staggerContainer}
        className="space-y-3"
      >
        {credentials.map((cred, index) => (
          <motion.div
            key={index}
            variants={staggerItem}
            className="flex items-center gap-4 p-4 rounded-2xl bg-dark-800/50 border border-dark-700/50"
          >
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-2xl flex-shrink-0">
              {cred.icon}
            </div>
            <div>
              <p className="text-white font-semibold text-sm">{cred.title}</p>
              <p className="text-gray-500 text-xs">{cred.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
