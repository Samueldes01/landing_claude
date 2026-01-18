import { motion } from 'framer-motion'
import { useScrollAnimation, slideInLeft } from '../../hooks/useScrollAnimation'

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

export function Problems() {
  const { ref, controls } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section className="py-16 px-5 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 right-0 w-40 h-40 bg-red-500/5 rounded-full blur-[80px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={slideInLeft}
        className="mb-8"
      >
        <motion.span
          className="inline-block px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-medium mb-3"
          whileHover={{ scale: 1.05 }}
        >
          Le problème
        </motion.span>
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
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5, margin: '-80px' }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <motion.div
              className="relative flex items-center gap-4 p-4 rounded-2xl bg-dark-800/50 border border-dark-700/50 backdrop-blur-sm overflow-hidden group"
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              {/* Hover gradient effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Animated border on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl border border-red-500/0 group-hover:border-red-500/20 transition-colors duration-300"
              />

              {/* Icon with bounce animation */}
              <motion.div
                className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/10 flex items-center justify-center text-2xl flex-shrink-0"
                whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
              >
                {problem.icon}
              </motion.div>

              {/* Text with highlight */}
              <p className="relative text-gray-300 font-medium text-sm leading-relaxed">
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

              {/* Arrow indicator */}
              <motion.div
                className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ x: -10 }}
                whileHover={{ x: 0 }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="text-red-400"
                  strokeWidth="2"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Transition text */}
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <motion.div
          className="inline-flex items-center gap-2 text-gray-500"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm">La solution existe</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
