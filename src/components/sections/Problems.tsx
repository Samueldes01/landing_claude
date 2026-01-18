import { motion } from 'framer-motion'

const problems = [
  {
    icon: '😤',
    text: "Tu t'entraînes dur mais tu stagnes",
    highlight: 'stagnes',
  },
  {
    icon: '🦵',
    text: "Tu manques d'explosivité sur le terrain",
    highlight: 'explosivité',
  },
  {
    icon: '🤷',
    text: 'Tu ne sais pas structurer ta prépa physique',
    highlight: 'structurer',
  },
  {
    icon: '📉',
    text: 'Tu veux passer au niveau supérieur',
    highlight: 'niveau supérieur',
  },
]

// Animation simplifiée pour mobile
const cardVariant = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
}

export function Problems() {
  return (
    <section className="py-14 px-5 relative overflow-hidden">
      {/* Background glow simplifié */}
      <div className="absolute top-10 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-[60px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4 }}
        className="mb-6"
      >
        <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-medium mb-3">
          Le problème
        </span>
        <h2 className="text-2xl font-bold text-white mb-2">
          Tu te reconnais ?
        </h2>
        <p className="text-gray-500 text-sm">
          Ces blocages t'empêchent de progresser
        </p>
      </motion.div>

      <div className="space-y-3">
        {problems.map((problem, index) => (
          <motion.div
            key={index}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-4 p-4 rounded-2xl bg-dark-800/50 border border-dark-700/50"
          >
            {/* Icon */}
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/10 flex items-center justify-center text-xl flex-shrink-0">
              {problem.icon}
            </div>

            {/* Text with highlight */}
            <p className="text-gray-300 font-medium text-sm leading-relaxed">
              {problem.text.split(problem.highlight).map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <span className="text-red-400 font-semibold">
                      {problem.highlight}
                    </span>
                  )}
                </span>
              ))}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Transition text */}
      <motion.div
        className="mt-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <div className="inline-flex items-center gap-2 text-gray-500">
          <span className="text-sm">La solution existe</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
