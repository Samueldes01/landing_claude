import { motion } from 'framer-motion'
import { useScrollAnimation, slideInLeft } from '../../hooks/useScrollAnimation'
import { VideoCarousel } from '../ui/VideoCarousel'

// YouTube Shorts video IDs (extracted from the URLs)
const testimonialVideos = [
  { id: 'b3Edy9gD81Q', title: 'Témoignage 1' },
  { id: 'Yh44pr55VSQ', title: 'Témoignage 2' },
  { id: 'pH9LqLtOxfg', title: 'Témoignage 3' },
]

export function Testimonials() {
  const { ref, controls } = useScrollAnimation()

  return (
    <section className="py-16 px-5">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={slideInLeft}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-white mb-2">
          Ce qu'ils en disent
        </h2>
        <p className="text-gray-500">
          Des athlètes qui ont transformé leur jeu
        </p>
      </motion.div>

      {/* Video Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.2 }}
      >
        <VideoCarousel videos={testimonialVideos} />
      </motion.div>
    </section>
  )
}
