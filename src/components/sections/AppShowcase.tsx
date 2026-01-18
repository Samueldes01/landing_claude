import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export function AppShowcase() {
  return (
    <section className="py-14 px-5 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium mb-3">
          Application dédiée
        </span>
        <h2 className="text-2xl font-bold text-white mb-2">
          Tout dans une seule app
        </h2>
        <p className="text-gray-500 text-sm">
          Track Training : ton coach dans ta poche
        </p>
      </motion.div>

      {/* Phone Mockups */}
      <div className="space-y-8">
        {/* Screen 1 - Dashboard */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <PhoneMockup>
            <DashboardScreen />
          </PhoneMockup>
          <p className="text-center text-gray-400 text-sm mt-3 flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-orange-500 rounded-full" />
            Suivi de ta charge d'entraînement
          </p>
        </motion.div>

        {/* Screen 2 - Exercise */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <PhoneMockup>
            <ExerciseScreen />
          </PhoneMockup>
          <p className="text-center text-gray-400 text-sm mt-3 flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full" />
            Analyse détaillée par exercice
          </p>
        </motion.div>

        {/* Screen 3 - Nutrition */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <PhoneMockup>
            <NutritionScreen />
          </PhoneMockup>
          <p className="text-center text-gray-400 text-sm mt-3 flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            Suivi nutritionnel complet
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// Phone Mockup simplifié
function PhoneMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-[260px]">
      <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] p-2.5 shadow-xl">
        {/* Dynamic Island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-20" />
        {/* Screen */}
        <div className="bg-[#F8F9FA] rounded-[2rem] overflow-hidden aspect-[9/18]">
          {children}
        </div>
        {/* Home indicator */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-1 bg-gray-600 rounded-full" />
      </div>
    </div>
  )
}

// Dashboard Screen
function DashboardScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(92), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="h-full pt-10 px-3 pb-3 text-gray-900">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
            <span className="text-white text-[10px] font-bold">TT</span>
          </div>
          <div>
            <p className="text-gray-500 text-[8px]">Bonjour,</p>
            <p className="text-gray-900 font-semibold text-xs">Thomas 👋</p>
          </div>
        </div>
      </div>

      {/* Charge Card */}
      <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 mb-2">
        <div className="flex justify-between items-center mb-2">
          <div>
            <p className="text-gray-900 font-semibold text-xs">Charge d'entraînement</p>
            <p className="text-gray-500 text-[8px]">Cette semaine</p>
          </div>
          <span className="text-[#FF8840] font-bold text-sm">{progress}%</span>
        </div>
        {/* Bar Chart */}
        <div className="flex items-end justify-between gap-1.5 h-14">
          {[65, 78, 82, 70, 88, 92].map((height, i) => (
            <div
              key={i}
              className="flex-1 bg-gradient-to-t from-[#FF8840] to-[#FFB380] rounded-t transition-all duration-500"
              style={{ height: `${(height * progress) / 100}%` }}
            />
          ))}
        </div>
        <div className="flex justify-between mt-1">
          {['L', 'M', 'M', 'J', 'V', 'S'].map((day, i) => (
            <span key={i} className="text-[7px] text-gray-400 flex-1 text-center">{day}</span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-1.5 mb-2">
        {[
          { value: '6', label: 'Séances', color: '#FF8840' },
          { value: '4.2h', label: 'Durée', color: '#007AFF' },
          { value: '+12%', label: 'Progrès', color: '#10B981' },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-lg p-2 text-center shadow-sm border border-gray-100">
            <p className="font-bold text-xs" style={{ color: stat.color }}>{stat.value}</p>
            <p className="text-gray-500 text-[7px]">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Next Training */}
      <div className="bg-gradient-to-r from-[#FF8840] to-[#FF6B20] rounded-xl p-3">
        <p className="text-white/80 text-[8px]">Prochaine séance</p>
        <p className="text-white font-semibold text-xs">Force - Bas du corps</p>
        <p className="text-white/70 text-[8px] mt-0.5">Aujourd'hui, 18:00</p>
      </div>
    </div>
  )
}

// Exercise Screen
function ExerciseScreen() {
  const [drawn, setDrawn] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setDrawn(true), 400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="h-full pt-10 px-3 pb-3 text-gray-900">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <div className="w-7 h-7 rounded-lg bg-[#FF8840]/10 flex items-center justify-center">
          <span className="text-xs">🏋️</span>
        </div>
        <div>
          <p className="text-gray-900 font-semibold text-xs">Squat</p>
          <p className="text-gray-500 text-[8px]">Progression 12 semaines</p>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 mb-2">
        <div className="flex justify-between items-center mb-1">
          <p className="text-gray-600 text-[9px] font-medium">Évolution (kg)</p>
          <span className="text-[#FF8840] font-bold text-xs">95 kg</span>
        </div>
        <svg viewBox="0 0 200 60" className="w-full h-12">
          <defs>
            <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FF8840" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FF8840" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M 0 50 L 18 42 L 36 45 L 54 35 L 72 38 L 90 28 L 108 32 L 126 22 L 144 25 L 162 15 L 180 18 L 200 8 L 200 60 L 0 60 Z"
            fill="url(#areaGrad)"
            opacity={drawn ? 1 : 0}
            style={{ transition: 'opacity 0.5s' }}
          />
          <path
            d="M 0 50 L 18 42 L 36 45 L 54 35 L 72 38 L 90 28 L 108 32 L 126 22 L 144 25 L 162 15 L 180 18 L 200 8"
            fill="none"
            stroke="#FF8840"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={drawn ? '0' : '500'}
            strokeDashoffset={drawn ? '0' : '500'}
            style={{ transition: 'stroke-dasharray 1s, stroke-dashoffset 1s' }}
          />
        </svg>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-1.5 mb-2">
        {[
          { icon: '🏆', label: 'Record', value: '95 kg', color: '#FF8840' },
          { icon: '📈', label: 'Progrès', value: '+25 kg', color: '#10B981' },
          { icon: '🔄', label: 'Séances', value: '24', color: '#007AFF' },
          { icon: '⚡', label: 'Tendance', value: 'Hausse', color: '#8B5CF6' },
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-lg p-2 shadow-sm border border-gray-100">
            <span className="text-xs">{item.icon}</span>
            <p className="text-gray-500 text-[7px] mt-0.5">{item.label}</p>
            <p className="font-bold text-[10px]" style={{ color: item.color }}>{item.value}</p>
          </div>
        ))}
      </div>

      {/* Badge */}
      <div className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border border-yellow-400/30 rounded-xl p-2 flex items-center gap-2">
        <span className="text-lg">🏆</span>
        <div>
          <p className="text-[#FF8840] font-semibold text-[10px]">Nouveau record !</p>
          <p className="text-gray-600 text-[8px]">+15kg en 8 semaines</p>
        </div>
      </div>
    </div>
  )
}

// Nutrition Screen
function NutritionScreen() {
  const [calories, setCalories] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCalories(prev => prev >= 1850 ? 1850 : prev + 100)
    }, 50)
    return () => clearInterval(timer)
  }, [])

  const macros = [
    { name: 'Protéines', value: 145, target: 160, color: '#FF6B6B' },
    { name: 'Glucides', value: 220, target: 250, color: '#4ECDC4' },
    { name: 'Lipides', value: 65, target: 70, color: '#D1B000' },
  ]

  return (
    <div className="h-full pt-10 px-3 pb-3 text-gray-900">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="text-gray-500 text-[8px]">Aujourd'hui</p>
          <p className="text-gray-900 font-semibold text-xs">Nutrition</p>
        </div>
        <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center">
          <span className="text-xs">🍎</span>
        </div>
      </div>

      {/* Calories Circle */}
      <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 mb-2">
        <div className="flex items-center justify-center">
          <div className="relative w-20 h-20">
            <svg className="w-full h-full -rotate-90">
              <circle cx="40" cy="40" r="34" fill="none" stroke="#E5E7EB" strokeWidth="6" />
              <circle
                cx="40"
                cy="40"
                r="34"
                fill="none"
                stroke="#007AFF"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={`${(calories / 2200) * 213} 213`}
                style={{ transition: 'stroke-dasharray 0.3s' }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-gray-900 font-bold text-sm">{calories}</span>
              <span className="text-gray-500 text-[8px]">/ 2200 kcal</span>
            </div>
          </div>
        </div>
        <div className="mt-2 flex justify-center">
          <span className="px-2 py-0.5 bg-green-100 text-green-600 text-[8px] font-medium rounded-full">
            ✓ En bonne voie
          </span>
        </div>
      </div>

      {/* Macros */}
      <div className="space-y-1.5">
        {macros.map((macro, i) => (
          <div key={i} className="bg-white rounded-lg p-2 shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-700 text-[9px] font-medium">{macro.name}</span>
              <span className="text-gray-900 font-semibold text-[9px]">
                {macro.value} / {macro.target}g
              </span>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  backgroundColor: macro.color,
                  width: `${(macro.value / macro.target) * 100}%`
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Water */}
      <div className="mt-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-xl p-2 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="text-sm">💧</span>
          <div>
            <p className="text-gray-700 font-medium text-[9px]">Hydratation</p>
            <p className="text-gray-500 text-[8px]">1.8L / 2.5L</p>
          </div>
        </div>
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className={`w-1.5 h-5 rounded-full ${i <= 3 ? 'bg-blue-400' : 'bg-gray-200'}`} />
          ))}
        </div>
      </div>
    </div>
  )
}
