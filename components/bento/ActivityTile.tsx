'use client'

import { motion } from 'framer-motion'
import { Activity, TrendingUp } from 'lucide-react'
import { itemVariants } from './BentoGrid'

const weeks = Array.from({ length: 15 }, (_, wi) =>
  Array.from({ length: 7 }, (_, di) => ({
    level: ((wi * 7 + di) % 10) > 6 ? 4 : ((wi * 7 + di) % 6) > 3 ? 3 : ((wi * 7 + di) % 4) > 1 ? 2 : 1,
    week: wi,
    day: di,
  }))
)

const levelColors: Record<number, string> = {
  0: 'bg-white/[0.04]',
  1: 'bg-indigo-500/20 hover:bg-indigo-500/30',
  2: 'bg-indigo-500/40 hover:bg-indigo-500/50',
  3: 'bg-indigo-500/70 hover:bg-indigo-500/80',
  4: 'bg-indigo-500 hover:bg-indigo-400 shadow-[0_0_8px_rgba(99,102,241,0.5)]',
}

export default function ActivityTile() {
  return (
    <motion.article
      variants={itemVariants}
      initial="hidden"
      animate="show"
      whileHover={{ scale: 1.005 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative rounded-3xl p-6 md:p-7 overflow-hidden bg-gradient-to-br from-[#0f0f1a] via-[#0d0d14] to-[#0a0a0f] border border-white/[0.08] h-full group"
    >
      {/* Animated background gradients */}
      <div className="absolute -top-16 -right-16 w-56 h-56 bg-purple-500/15 rounded-full blur-[80px] pointer-events-none animate-[pulse-glow_5s_ease-in-out_infinite]" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-indigo-500/15 rounded-full blur-[70px] pointer-events-none animate-[pulse-glow_6s_ease-in-out_infinite]" />

      {/* Grain texture */}
      <div
        className="absolute inset-0 rounded-3xl opacity-[0.015] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-purple-500/10 via-indigo-500/5 to-transparent" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-400/30 flex items-center justify-center shadow-lg shadow-purple-500/20">
              <Activity size={16} className="text-purple-300" strokeWidth={2.5} />
            </div>
            <h2 className="text-base font-semibold text-slate-200">Learning Activity</h2>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
            <TrendingUp size={12} className="text-emerald-400" />
            <span className="text-emerald-400 text-xs font-semibold">+12%</span>
          </div>
        </div>

        <div className="flex gap-1.5 flex-1 items-center overflow-x-auto pb-2 scrollbar-hide">
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-1.5">
              {week.map((cell, di) => (
                <motion.div
                  key={di}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: (wi * 7 + di) * 0.004,
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                  }}
                  whileHover={{ scale: 1.3 }}
                  className={`w-[11px] h-[11px] rounded-[3px] ${levelColors[cell.level]} transition-all duration-200 cursor-pointer`}
                  title={`Week ${wi + 1}, Day ${di + 1}`}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
          <p className="text-slate-500 text-xs font-medium">Last 15 weeks of activity</p>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-sm bg-white/[0.04]"></div>
              <span className="text-[10px] text-slate-600">Less</span>
            </div>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-sm bg-indigo-500/20"></div>
              <div className="w-2 h-2 rounded-sm bg-indigo-500/40"></div>
              <div className="w-2 h-2 rounded-sm bg-indigo-500/70"></div>
              <div className="w-2 h-2 rounded-sm bg-indigo-500"></div>
            </div>
            <span className="text-[10px] text-slate-600">More</span>
          </div>
        </div>
      </div>
    </motion.article>
  )
}