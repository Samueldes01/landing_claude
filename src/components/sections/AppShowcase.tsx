import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { useScrollAnimation, slideInLeft } from '../../hooks/useScrollAnimation'

export function AppShowcase() {
  const { ref, controls } = useScrollAnimation()
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60])
  const y2 = useTransform(scrollYProgress, [0, 1], [80, -80])
  const y3 = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section ref={containerRef} className="py-16 px-5 overflow-hidden">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={slideInLeft}
        className="mb-10"
      >
        <motion.span
          className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium mb-3"
          whileHover={{ scale: 1.05 }}
        >
          Application dédiée
        </motion.span>
        <h2 className="text-2xl font-bold text-white mb-2">
          Tout dans une seule app
        </h2>
        <p className="text-gray-500 text-sm">
          Track Training : ton coach dans ta poche
        </p>
      </motion.div>

      {/* Phone Mockups - Style Track Training authentique */}
      <div className="relative">
        {/* Glow effects */}
        <div className="absolute top-1/4 left-0 w-32 h-32 bg-orange-500/20 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-[80px]" />

        <div className="space-y-10">
          {/* Screen 1 - Dashboard / Charge */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ y: y1 }}
          >
            <TrackTrainingPhone type="dashboard" />
            <motion.p
              className="text-center text-gray-400 text-sm mt-4 flex items-center justify-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.5 }}
            >
              <span className="w-2 h-2 bg-orange-500 rounded-full" />
              Suivi de ta charge d'entraînement
            </motion.p>
          </motion.div>

          {/* Screen 2 - Exercise Analysis */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ y: y2 }}
          >
            <TrackTrainingPhone type="exercise" />
            <motion.p
              className="text-center text-gray-400 text-sm mt-4 flex items-center justify-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.5 }}
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
              Analyse détaillée par exercice
            </motion.p>
          </motion.div>

          {/* Screen 3 - Nutrition */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ y: y3 }}
          >
            <TrackTrainingPhone type="nutrition" />
            <motion.p
              className="text-center text-gray-400 text-sm mt-4 flex items-center justify-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.5 }}
            >
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              Suivi nutritionnel complet
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Composant Phone avec design Track Training authentique
function TrackTrainingPhone({ type }: { type: 'dashboard' | 'exercise' | 'nutrition' }) {
  return (
    <motion.div
      className="mx-auto w-[280px]"
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* iPhone Frame */}
      <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl shadow-black/50">
        {/* Dynamic Island */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-20" />

        {/* Screen - FOND CLAIR comme Track Training */}
        <div className="relative bg-[#F8F9FA] rounded-[2.5rem] overflow-hidden aspect-[9/19]">
          {type === 'dashboard' && <DashboardScreen />}
          {type === 'exercise' && <ExerciseScreen />}
          {type === 'nutrition' && <NutritionScreen />}
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-gray-600 rounded-full" />
      </div>
    </motion.div>
  )
}

// Écran Dashboard - Style Track Training
function DashboardScreen() {
  const [animatedValue, setAnimatedValue] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimatedValue((prev) => (prev >= 100 ? 0 : prev + 1))
    }, 50)
    return () => clearInterval(timer)
  }, [])

  const barHeights = [65, 78, 82, 70, 88, 92]

  return (
    <div className="h-full pt-12 px-4 pb-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-lg">
            <span className="text-white text-xs font-bold">TT</span>
          </div>
          <div>
            <p className="text-gray-500 text-[10px]">Bonjour,</p>
            <p className="text-gray-900 font-semibold text-sm">Thomas 👋</p>
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-600 text-xs">🔔</span>
        </div>
      </div>

      {/* Card Charge d'entraînement */}
      <motion.div
        className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex justify-between items-center mb-3">
          <div>
            <p className="text-gray-900 font-semibold text-sm">Charge d'entraînement</p>
            <p className="text-gray-500 text-[10px]">Cette semaine</p>
          </div>
          <motion.span
            className="text-[#FF8840] font-bold text-lg"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            {Math.round(animatedValue * 0.92)}%
          </motion.span>
        </div>

        {/* Bar Chart animé */}
        <div className="flex items-end justify-between gap-2 h-20">
          {barHeights.map((height, i) => (
            <motion.div
              key={i}
              className="flex-1 bg-gradient-to-t from-[#FF8840] to-[#FFB380] rounded-t-md"
              initial={{ height: 0 }}
              animate={{ height: `${height * (animatedValue / 100)}%` }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            />
          ))}
        </div>
        <div className="flex justify-between mt-1">
          {['L', 'M', 'M', 'J', 'V', 'S'].map((day, i) => (
            <span key={i} className="text-[8px] text-gray-400 flex-1 text-center">{day}</span>
          ))}
        </div>
      </motion.div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { value: '6', label: 'Séances', color: '#FF8840' },
          { value: '4.2h', label: 'Durée', color: '#007AFF' },
          { value: '+12%', label: 'Progrès', color: '#10B981' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-xl p-3 text-center shadow-sm border border-gray-100"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            whileHover={{ y: -2, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
          >
            <p className="font-bold text-sm" style={{ color: stat.color }}>{stat.value}</p>
            <p className="text-gray-500 text-[9px]">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Next Training Card */}
      <motion.div
        className="mt-3 bg-gradient-to-r from-[#FF8840] to-[#FF6B20] rounded-2xl p-4 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white/80 text-[10px]">Prochaine séance</p>
            <p className="text-white font-semibold text-sm">Force - Bas du corps</p>
            <p className="text-white/70 text-[10px] mt-1">Aujourd'hui, 18:00</p>
          </div>
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-white text-lg">💪</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

// Écran Exercise Analysis - Style Track Training
function ExerciseScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 500)
    return () => clearTimeout(timer)
  }, [])

  const chartPoints = [30, 45, 40, 55, 50, 65, 60, 75, 72, 85, 80, 95]

  return (
    <div className="h-full pt-12 px-4 pb-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-lg bg-[#FF8840]/10 flex items-center justify-center">
          <span className="text-sm">🏋️</span>
        </div>
        <div>
          <p className="text-gray-900 font-semibold text-sm">Squat</p>
          <p className="text-gray-500 text-[10px]">Progression sur 12 semaines</p>
        </div>
      </div>

      {/* Chart Card */}
      <motion.div
        className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex justify-between items-center mb-2">
          <p className="text-gray-600 text-xs font-medium">Évolution charge (kg)</p>
          <motion.span
            className="text-[#FF8840] font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            95 kg
          </motion.span>
        </div>

        {/* SVG Line Chart */}
        <svg viewBox="0 0 200 80" className="w-full h-20">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FF8840" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FF8840" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Area */}
          <motion.path
            d={`M 0 ${80 - chartPoints[0] * 0.7} ${chartPoints.map((p, i) => `L ${i * (200 / 11)} ${80 - p * 0.7}`).join(' ')} L 200 80 L 0 80 Z`}
            fill="url(#lineGrad)"
            initial={{ opacity: 0 }}
            animate={{ opacity: progress / 100 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          {/* Line */}
          <motion.path
            d={`M 0 ${80 - chartPoints[0] * 0.7} ${chartPoints.map((p, i) => `L ${i * (200 / 11)} ${80 - p * 0.7}`).join(' ')}`}
            fill="none"
            stroke="#FF8840"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: progress / 100 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />

          {/* End dot */}
          <motion.circle
            cx="200"
            cy={80 - 95 * 0.7}
            r="4"
            fill="#FF8840"
            initial={{ scale: 0 }}
            animate={{ scale: progress / 100 }}
            transition={{ delay: 1.5 }}
          />
        </svg>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        {[
          { icon: '🏆', label: 'Record', value: '95 kg', color: '#FF8840' },
          { icon: '📈', label: 'Progrès', value: '+25 kg', color: '#10B981' },
          { icon: '🔄', label: 'Séances', value: '24', color: '#007AFF' },
          { icon: '⚡', label: 'Tendance', value: 'Hausse', color: '#8B5CF6' },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-xl p-3 shadow-sm border border-gray-100"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + i * 0.1 }}
          >
            <span className="text-sm">{item.icon}</span>
            <p className="text-gray-500 text-[9px] mt-1">{item.label}</p>
            <p className="font-bold text-xs" style={{ color: item.color }}>{item.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Achievement Badge */}
      <motion.div
        className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border border-yellow-400/30 rounded-2xl p-3 flex items-center gap-3"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, type: 'spring' }}
      >
        <span className="text-2xl">🏆</span>
        <div>
          <p className="text-[#FF8840] font-semibold text-xs">Nouveau record !</p>
          <p className="text-gray-600 text-[10px]">+15kg en 8 semaines</p>
        </div>
      </motion.div>
    </div>
  )
}

// Écran Nutrition - Style Track Training
function NutritionScreen() {
  const [calories, setCalories] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCalories((prev) => (prev >= 1850 ? 1850 : prev + 50))
    }, 30)
    return () => clearInterval(interval)
  }, [])

  const macros = [
    { name: 'Protéines', value: 145, target: 160, color: '#FF6B6B', unit: 'g' },
    { name: 'Glucides', value: 220, target: 250, color: '#4ECDC4', unit: 'g' },
    { name: 'Lipides', value: 65, target: 70, color: '#D1B000', unit: 'g' },
  ]

  return (
    <div className="h-full pt-12 px-4 pb-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-gray-500 text-[10px]">Aujourd'hui</p>
          <p className="text-gray-900 font-semibold text-sm">Nutrition</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
          <span className="text-sm">🍎</span>
        </div>
      </div>

      {/* Calories Circle */}
      <motion.div
        className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="flex items-center justify-center">
          <div className="relative w-28 h-28">
            {/* Background circle */}
            <svg className="w-full h-full -rotate-90">
              <circle cx="56" cy="56" r="48" fill="none" stroke="#E5E7EB" strokeWidth="8" />
              <motion.circle
                cx="56"
                cy="56"
                r="48"
                fill="none"
                stroke="#007AFF"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${(calories / 2200) * 301} 301`}
                initial={{ strokeDasharray: '0 301' }}
                animate={{ strokeDasharray: `${(calories / 2200) * 301} 301` }}
                transition={{ duration: 1 }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.span
                className="text-gray-900 font-bold text-xl"
                key={calories}
              >
                {calories}
              </motion.span>
              <span className="text-gray-500 text-[10px]">/ 2200 kcal</span>
            </div>
          </div>
        </div>

        {/* Status badge */}
        <motion.div
          className="mt-3 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span className="px-3 py-1 bg-green-100 text-green-600 text-[10px] font-medium rounded-full">
            ✓ En bonne voie
          </span>
        </motion.div>
      </motion.div>

      {/* Macros */}
      <div className="space-y-2">
        {macros.map((macro, i) => (
          <motion.div
            key={macro.name}
            className="bg-white rounded-xl p-3 shadow-sm border border-gray-100"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.1 }}
          >
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-700 text-xs font-medium">{macro.name}</span>
              <span className="text-gray-900 font-semibold text-xs">
                {macro.value} / {macro.target}{macro.unit}
              </span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: macro.color }}
                initial={{ width: 0 }}
                animate={{ width: `${(macro.value / macro.target) * 100}%` }}
                transition={{ duration: 0.8, delay: 0.6 + i * 0.1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Water tracker */}
      <motion.div
        className="mt-3 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-2xl p-3 flex items-center justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="flex items-center gap-2">
          <span className="text-xl">💧</span>
          <div>
            <p className="text-gray-700 font-medium text-xs">Hydratation</p>
            <p className="text-gray-500 text-[10px]">1.8L / 2.5L</p>
          </div>
        </div>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              className={`w-2 h-6 rounded-full ${i <= 3 ? 'bg-blue-400' : 'bg-gray-200'}`}
              initial={{ height: 0 }}
              animate={{ height: 24 }}
              transition={{ delay: 1.2 + i * 0.05 }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
