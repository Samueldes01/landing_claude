import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation, slideInLeft, staggerContainer, staggerItem } from '../../hooks/useScrollAnimation'

const YOUTUBE_VIDEO_ID = 'Yfht7OUo8Cs'

const solutions = [
  {
    icon: '🎯',
    title: 'Programme sur-mesure',
    description: 'Adapté à ton niveau et tes objectifs',
    color: 'from-orange-500/20 to-orange-600/10',
  },
  {
    icon: '📱',
    title: 'Suivi via app dédiée',
    description: 'Track ta progression en temps réel',
    color: 'from-blue-500/20 to-blue-600/10',
  },
  {
    icon: '🍎',
    title: 'Nutrition optimisée',
    description: 'Alimentation adaptée à tes besoins',
    color: 'from-green-500/20 to-green-600/10',
  },
  {
    icon: '📊',
    title: 'Analyse de tes perfs',
    description: 'Data pour optimiser tes résultats',
    color: 'from-purple-500/20 to-purple-600/10',
  },
  {
    icon: '🔄',
    title: 'Ajustements continus',
    description: 'Ton programme évolue avec toi',
    color: 'from-teal-500/20 to-teal-600/10',
  },
  {
    icon: '💬',
    title: 'Communication directe',
    description: 'Échanges réguliers et réactifs',
    color: 'from-pink-500/20 to-pink-600/10',
  },
]

export function Solution() {
  const { ref, controls } = useScrollAnimation()
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <section className="py-16 px-5 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-[100px]"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={slideInLeft}
        >
          <motion.span
            className="inline-block px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-medium mb-3"
            whileHover={{ scale: 1.05 }}
          >
            Accompagnement complet
          </motion.span>
          <h2 className="text-2xl font-bold text-white mb-2">
            De A à Z, tout est couvert
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            Prépa physique, suivi personnalisé et nutrition
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="grid grid-cols-2 gap-3 mb-8"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className={`relative p-4 rounded-2xl bg-gradient-to-br ${solution.color} border border-dark-700/50 backdrop-blur-sm overflow-hidden group`}
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
              />

              <motion.div
                className="w-10 h-10 rounded-xl bg-dark-800/50 flex items-center justify-center text-xl mb-3"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                {solution.icon}
              </motion.div>
              <h3 className="text-white font-semibold text-sm mb-1">
                {solution.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Video Player with Thumbnail */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <p className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
            Découvre l'accompagnement en détail
          </p>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-dark-700/80 ring-1 ring-orange-500/10">
            <AnimatePresence mode="wait">
              {!isVideoPlaying ? (
                <motion.div
                  key="thumbnail"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative cursor-pointer group"
                  onClick={() => setIsVideoPlaying(true)}
                >
                  {/* YouTube Thumbnail */}
                  <div className="aspect-video bg-dark-800">
                    <img
                      src={`https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`}
                      alt="Vidéo de présentation"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to hqdefault if maxresdefault doesn't exist
                        (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`
                      }}
                    />
                  </div>

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />

                  {/* Play Button */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      className="relative"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {/* Pulse rings */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="w-20 h-20 rounded-full bg-orange-500/30"
                          animate={{
                            scale: [1, 1.5],
                            opacity: [0.5, 0],
                          }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="w-20 h-20 rounded-full bg-orange-500/30"
                          animate={{
                            scale: [1, 1.5],
                            opacity: [0.5, 0],
                          }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                        />
                      </div>

                      {/* Play button */}
                      <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/40 group-hover:shadow-orange-500/60 transition-shadow">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="white"
                          className="ml-1"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Duration badge */}
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 rounded text-white text-xs font-medium">
                    2:34
                  </div>

                  {/* Watch text */}
                  <motion.div
                    className="absolute bottom-3 left-3 flex items-center gap-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10 }}
                    animate={{ x: 0 }}
                  >
                    <span>▶</span>
                    <span>Regarder la vidéo</span>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="video"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="aspect-video"
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                    title="Présentation de l'accompagnement"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
