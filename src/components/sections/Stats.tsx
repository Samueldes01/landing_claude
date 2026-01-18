import { motion } from 'framer-motion'
import { useCountUp } from '../../hooks/useCountUp'

const stats = [
  {
    value: 4,
    suffix: '+',
    label: "Années d'expérience",
    sublabel: 'en prépa physique',
  },
  {
    value: 10,
    suffix: '',
    label: 'Ans de basket',
    sublabel: 'en tant que joueur',
  },
]

export function Stats() {
  return (
    <section className="py-16 px-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl font-bold text-white mb-2">
          L'expérience au service de ta performance
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} delay={index * 0.2} />
        ))}
      </div>

      {/* Additional info */}
      <motion.p
        className="text-center text-gray-500 text-sm mt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ delay: 0.6 }}
      >
        Je connais le terrain et ses exigences
      </motion.p>
    </section>
  )
}

interface StatCardProps {
  value: number
  suffix: string
  label: string
  sublabel: string
  delay: number
}

function StatCard({ value, suffix, label, sublabel, delay }: StatCardProps) {
  const { ref, value: displayValue } = useCountUp({
    end: value,
    duration: 1500,
    delay: delay * 1000,
    suffix,
  })

  return (
    <motion.div
      ref={ref}
      className="relative p-6 rounded-2xl bg-dark-800/80 border border-dark-700/50 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ delay, duration: 0.5 }}
    >
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-orange-500/10 rounded-full blur-2xl" />

      <div className="relative z-10">
        <span className="text-4xl font-bold text-gradient">
          {displayValue}
        </span>
        <p className="text-white font-semibold text-sm mt-2">
          {label}
        </p>
        <p className="text-gray-500 text-xs mt-1">
          {sublabel}
        </p>
      </div>
    </motion.div>
  )
}
