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
  0: 'bg-white/[0.03]',
  1: 'bg-indigo-500/25 hover:bg-indigo-500/35',
  2: 'bg-indigo-500/45 hover:bg-indigo-500/55',
  3: 'bg-indigo-500/70 hover:bg-indigo-500/80',
  4: 'bg-indigo-400 hover:bg-indigo-300 shadow-[0_0_12px_rgba(129,140,248,0.6)]',
}

export default function ActivityTile() {
  return (
    <motion.article
      variants={itemVariants}
      initial="hidden"
      animate="show"
      whileHover={{ scale: 1.002, y: -2 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="relative rounded-[28px] p-6 md:p-8 overflow-hidden bg-gradient-to-br from-[#12121d]/90 via-[#0d0d14] to-[#0a0a0f] border border-white/[0.06] h-full group shadow-2xl shadow-black/40"
    >
      {/* Animated background gradients */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-[90px] pointer-events-none animate-[pulse-glow_7s_ease-in-out_infinite]" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-indigo-500/20 rounded-full blur-[80px] pointer-events-none animate-[pulse-glow_9s_ease-in-out_infinite]" />

      {/* Grain texture */}
      <div
        className="absolute inset-0 rounded-[28px] opacity-[0.02] pointer-events-none mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-[0.5px] rounded-[27.5px] bg-gradient-to-br from-purple-500/15 via-indigo-500/8 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-[14px] bg-gradient-to-br from-purple-500/25 via-purple-500/15 to-purple-600/10 border border-purple-400/40 flex items-center justify-center shadow-xl shadow-purple-500/30">
              <Activity size={18} className="text-purple-200" strokeWidth={2.5} />
            </div>
            <h2 className="text-[17px] font-bold text-slate-100 tracking-tight">Learning Activity</h2>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-400/30 shadow-lg shadow-emerald-500/20">
            <TrendingUp size={13} className="text-emerald-300" strokeWidth={2.5} />
            <span className="text-emerald-300 text-xs font-bold">+12%</span>
          </div>
        </div>

        <div className="flex gap-[5px] flex-1 items-center overflow-x-auto pb-2 scrollbar-hide">
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[5px]">
              {week.map((cell, di) => (
                <motion.div
                  key={di}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: (wi * 7 + di) * 0.003,
                    type: 'spring',
                    stiffness: 350,
                    damping: 20,
                  }}
                  whileHover={{ scale: 1.4, rotate: 5 }}
                  className={`w-[12px] h-[12px] rounded-[4px] ${levelColors[cell.level]} transition-all duration-200 cursor-pointer backdrop-blur-sm`}
                  title={`Week ${wi + 1}, Day ${di + 1}`}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-5 pt-5 border-t border-white/[0.06]">
          <p className="text-slate-500 text-xs font-semibold tracking-wide">Last 15 weeks of activity</p>
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5">
              <div className="w-[9px] h-[9px] rounded-[2px] bg-white/[0.03]"></div>
              <span className="text-[11px] text-slate-600 font-medium">Less</span>
            </div>
            <div className="flex gap-1">
              <div className="w-[9px] h-[9px] rounded-[2px] bg-indigo-500/25"></div>
              <div className="w-[9px] h-[9px] rounded-[2px] bg-indigo-500/45"></div>
              <div className="w-[9px] h-[9px] rounded-[2px] bg-indigo-500/70"></div>
              <div className="w-[9px] h-[9px] rounded-[2px] bg-indigo-400"></div>
            </div>
            <span className="text-[11px] text-slate-600 font-medium">More</span>
          </div>
        </div>
      </div>
    </motion.article>
  )
}