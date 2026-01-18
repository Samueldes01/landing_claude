import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

interface VideoCarouselProps {
  videos: { id: string; title: string }[]
}

export function VideoCarousel({ videos }: VideoCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    if (!containerRef.current) return
    const scrollLeft = containerRef.current.scrollLeft
    const cardWidth = containerRef.current.offsetWidth * 0.8
    const newIndex = Math.round(scrollLeft / cardWidth)
    setActiveIndex(Math.min(newIndex, videos.length - 1))
  }

  const scrollToIndex = (index: number) => {
    if (!containerRef.current) return
    const cardWidth = containerRef.current.offsetWidth * 0.8
    containerRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth',
    })
  }

  return (
    <div className="w-full">
      {/* Carousel container */}
      <div
        ref={containerRef}
        className="video-carousel flex gap-4 overflow-x-auto pb-4 px-4 -mx-4 scrollbar-hide"
        onScroll={handleScroll}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            className="video-card flex-shrink-0 w-[80%] first:ml-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-dark-800 shadow-xl">
              {/* YouTube Shorts embed */}
              <iframe
                src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center gap-2 mt-4">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? 'bg-orange-500 w-6'
                : 'bg-gray-600 hover:bg-gray-500'
            }`}
          />
        ))}
      </div>

      {/* Swipe hint */}
      <p className="text-center text-gray-500 text-xs mt-3">
        ← Swipe pour voir plus →
      </p>
    </div>
  )
}
