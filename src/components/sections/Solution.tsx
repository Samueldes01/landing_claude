import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const YOUTUBE_VIDEO_ID = 'Yfht7OUo8Cs'

const solutions = [
  { icon: '🎯', title: 'Programme sur-mesure', description: 'Adapté à ton niveau et tes objectifs' },
  { icon: '📱', title: 'Suivi via app dédiée', description: 'Track ta progression en temps réel' },
  { icon: '🍎', title: 'Nutrition optimisée', description: 'Alimentation adaptée à tes besoins' },
  { icon: '📊', title: 'Analyse de tes perfs', description: 'Data pour optimiser tes résultats' },
  { icon: '🔄', title: 'Ajustements continus', description: 'Ton programme évolue avec toi' },
  { icon: '💬', title: 'Communication directe', description: 'Échanges réguliers et réactifs' },
]

export function Solution() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <section className="py-14 px-5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/5 rounded-full blur-[60px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4 }}
      >
        <span className="inline-block px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-medium mb-3">
          Accompagnement complet
        </span>
        <h2 className="text-2xl font-bold text-white mb-2">
          De A à Z, tout est couvert
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Prépa physique, suivi personnalisé et nutrition
        </p>
      </motion.div>

      {/* Solutions grid */}
      <div className="grid grid-cols-2 gap-3 mb-8">
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="p-4 rounded-2xl bg-dark-800/30 border border-dark-700/50"
          >
            <div className="w-9 h-9 rounded-xl bg-dark-700/50 flex items-center justify-center text-lg mb-2">
              {solution.icon}
            </div>
            <h3 className="text-white font-semibold text-sm mb-1">
              {solution.title}
            </h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              {solution.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Video Player */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4 }}
      >
        <p className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
          Découvre l'accompagnement en détail
        </p>

        <div className="relative rounded-2xl overflow-hidden border border-dark-700/80 ring-1 ring-orange-500/10">
          <AnimatePresence mode="wait">
            {!isVideoPlaying ? (
              <motion.div
                key="thumbnail"
                exit={{ opacity: 0 }}
                className="relative cursor-pointer"
                onClick={() => setIsVideoPlaying(true)}
              >
                {/* YouTube Thumbnail */}
                <div className="aspect-video bg-dark-800">
                  <img
                    src={`https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`}
                    alt="Vidéo de présentation"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`
                    }}
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Pulse ring */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-orange-500/30 animate-ping" style={{ animationDuration: '2s' }} />
                    </div>
                    {/* Play button */}
                    <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white" className="ml-1">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Duration badge */}
                <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 rounded text-white text-xs font-medium">
                  2:34
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="video"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="aspect-video"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
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
    </section>
  )
}
