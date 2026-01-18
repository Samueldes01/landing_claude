import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

interface AnimatedChartProps {
  type: 'line' | 'bar'
  title: string
  subtitle?: string
}

// Fake data for the charts
const lineData = [30, 45, 40, 60, 55, 75, 70, 85, 80, 95]
const barData = [65, 78, 82, 75, 88, 92]
const barLabels = ['L', 'M', 'M', 'J', 'V', 'S']

export function AnimatedChart({ type, title, subtitle }: AnimatedChartProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })
  const [currentValue, setCurrentValue] = useState(0)
  const targetValue = type === 'line' ? 95 : 92

  useEffect(() => {
    if (!inView) return

    const duration = 2000
    const startTime = Date.now()

    const animate = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)

      setCurrentValue(Math.round(eased * targetValue))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [inView, targetValue])

  return (
    <div ref={ref} className="bg-dark-800 rounded-2xl p-4 h-full">
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <div>
          <h4 className="text-white font-semibold text-sm">{title}</h4>
          {subtitle && <p className="text-gray-500 text-xs">{subtitle}</p>}
        </div>
        <div className="text-right">
          <motion.span
            className="text-orange-500 font-bold text-lg"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
          >
            {currentValue}
            {type === 'line' ? ' kg' : '%'}
          </motion.span>
        </div>
      </div>

      {/* Chart */}
      {type === 'line' ? (
        <LineChart data={lineData} inView={inView} />
      ) : (
        <BarChart data={barData} labels={barLabels} inView={inView} />
      )}
    </div>
  )
}

function LineChart({ data, inView }: { data: number[]; inView: boolean }) {
  const width = 220
  const height = 80
  const padding = 10

  const maxValue = Math.max(...data)
  const minValue = Math.min(...data)
  const range = maxValue - minValue

  const points = data.map((value, index) => {
    const x = padding + (index / (data.length - 1)) * (width - padding * 2)
    const y = height - padding - ((value - minValue) / range) * (height - padding * 2)
    return { x, y }
  })

  const pathD = points.reduce((acc, point, index) => {
    if (index === 0) return `M ${point.x} ${point.y}`
    return `${acc} L ${point.x} ${point.y}`
  }, '')

  // Area path
  const areaD = `${pathD} L ${points[points.length - 1].x} ${height - padding} L ${points[0].x} ${height - padding} Z`

  return (
    <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
      {/* Gradient definition */}
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Area fill */}
      <motion.path
        d={areaD}
        fill="url(#lineGradient)"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      />

      {/* Line */}
      <motion.path
        d={pathD}
        fill="none"
        stroke="#FF6B00"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />

      {/* End dot */}
      <motion.circle
        cx={points[points.length - 1].x}
        cy={points[points.length - 1].y}
        r="5"
        fill="#FF6B00"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.3, delay: 1.5 }}
      />
      <motion.circle
        cx={points[points.length - 1].x}
        cy={points[points.length - 1].y}
        r="8"
        fill="#FF6B00"
        opacity="0.3"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.3, delay: 1.5 }}
      />
    </svg>
  )
}

function BarChart({
  data,
  labels,
  inView,
}: {
  data: number[]
  labels: string[]
  inView: boolean
}) {
  const maxValue = Math.max(...data)

  return (
    <div className="flex items-end justify-between gap-2 h-20 mt-2">
      {data.map((value, index) => {
        const height = (value / maxValue) * 100

        return (
          <div key={index} className="flex flex-col items-center flex-1">
            <motion.div
              className="w-full bg-orange-500/20 rounded-t-md relative overflow-hidden"
              initial={{ height: 0 }}
              animate={inView ? { height: `${height}%` } : {}}
              transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
            >
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-500 to-orange-400"
                initial={{ height: 0 }}
                animate={inView ? { height: '100%' } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              />
            </motion.div>
            <span className="text-gray-500 text-[10px] mt-1">{labels[index]}</span>
          </div>
        )
      })}
    </div>
  )
}
