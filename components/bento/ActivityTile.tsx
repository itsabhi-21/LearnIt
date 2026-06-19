'use client'

import { motion } from 'framer-motion'
import { Activity, TrendingUp } from 'lucide-react'

const weeks = Array.from({ length: 15 }, (_, wi) =>
  Array.from({ length: 7 }, (_, di) => ({
    level: ((wi * 7 + di) % 10) > 6 ? 4 : ((wi * 7 + di) % 6) > 3 ? 3 : ((wi * 7 + di) % 4) > 1 ? 2 : 1,
    week: wi,
    day: di,
  }))
)

const levelColors: Record<number, string> = {
  0: 'bg-slate-800/30',
  1: 'bg-purple-500/30',
  2: 'bg-purple-500/50',
  3: 'bg-purple-500/70',
  4: 'bg-purple-500',
}

export default function ActivityTile() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="rounded-2xl p-6 bg-[#1a1a2e]/50 border border-white/5"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
            <Activity size={16} className="text-purple-400" />
          </div>
          <span className="text-sm font-semibold text-white">Learning Activity</span>
        </div>
        <div className="flex items-center gap-1.5 text-emerald-400 text-sm">
          <TrendingUp size={14} />
          <span className="font-semibold">+12%</span>
        </div>
      </div>

      {/* Subtitle */}
      <p className="text-sm text-slate-400 mb-4">Past 15 weeks</p>

      {/* Activity Graph */}
      <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-2">
            {week.map((cell, di) => (
              <motion.div
                key={di}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: (wi * 7 + di) * 0.002,
                  type: 'spring',
                  stiffness: 400,
                  damping: 20,
                }}
                whileHover={{ scale: 1.25 }}
                className={`w-3.5 h-3.5 md:w-4 md:h-4 rounded-sm ${levelColors[cell.level]} transition-all cursor-pointer`}
                title={`Week ${wi + 1}, Day ${di + 1}`}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/5">
        <span className="text-xs text-slate-500">Less</span>
        <div className="flex gap-2">
          {[0, 1, 2, 3, 4].map((level) => (
            <div key={level} className={`w-4 h-4 rounded-sm ${levelColors[level]}`} />
          ))}
        </div>
        <span className="text-xs text-slate-500">More</span>
      </div>
    </motion.article>
  )
}