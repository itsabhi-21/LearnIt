'use client'

import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'

export default function DailyStreakCard() {
  const days = [
    { active: true, fire: true },
    { active: true, fire: true },
    { active: true, fire: true },
    { active: true, fire: true },
    { active: true, fire: true },
    { active: false, fire: false },
    { active: false, fire: false },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="rounded-2xl p-6 bg-linear-to-br from-orange-900/40 to-orange-950/25 border border-orange-500/20 shadow-lg"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Flame size={18} className="text-orange-400" />
          <span className="text-sm font-semibold text-white">Daily Streak</span>
        </div>
        <div className="px-2.5 py-1 rounded-lg bg-orange-500/20 border border-orange-500/30">
          <span className="text-xs font-bold text-orange-300">🔥 On fire!</span>
        </div>
      </div>
      
      {/* Streak Number */}
      <div className="text-center mb-6">
        <div className="text-8xl md:text-7xl font-extrabold text-white mb-1">12</div>
        <p className="text-sm text-slate-400">days in a row</p>
      </div>
      
      {/* Days Grid */}
      <div className="flex justify-center gap-3">
        {days.map((day, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className={`w-12 h-12 rounded-xl flex items-center justify-center ${
              day.fire 
                ? 'bg-orange-500 shadow-2xl shadow-orange-500/40' 
                : 'bg-slate-800/50'
            }`}
          >
            {day.fire && (
              <Flame size={22} className="text-white" fill="currentColor" />
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
