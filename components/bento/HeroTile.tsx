'use client'

import { motion } from 'framer-motion'
import { Flame, Trophy, Zap } from 'lucide-react'
import { itemVariants } from './BentoGrid'

export default function HeroTile() {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-4 h-full p-6 rounded-2xl bg-[#1a1a2e]/50 border border-white/5"
    >
      {/* Top greeting card */}
      <motion.div
        whileHover={{ scale: 1.005 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="relative rounded-2xl p-8 overflow-hidden bg-[#0d0d14] border border-white/6"
      >
        {/* Glow orbs */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-indigo-500/15 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-purple-600/10 rounded-full blur-[70px] pointer-events-none" />

        {/* Noise grain */}
        <div
          className="absolute inset-0 rounded-2xl opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative  z-10">
          {/* Eyebrow */}
          <p className="text-slate-500 text-xs font-medium tracking-widest uppercase mb-3">
            Good morning 👋
          </p>

          {/* Heading with colored name */}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-white">
            Welcome back,{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 via-pink-400 to-indigo-400">
              Abhinav
            </span>
          </h1>

          <p className="text-slate-500 text-sm mt-2 mb-5">
            Ready to continue your learning journey?
          </p>

          {/* Badge pills */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-1.5 bg-orange-500/10 border border-orange-500/20 rounded-full px-3 py-1">
              <Flame size={13} className="text-orange-400" />
              <span className="text-orange-300 text-xs font-semibold">12 Day Streak</span>
            </div>
            <div className="flex items-center gap-1.5 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-3 py-1">
              <Trophy size={13} className="text-yellow-400" />
              <span className="text-yellow-300 text-xs font-semibold">4 Courses Active</span>
            </div>
            <div className="flex items-center gap-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1">
              <Zap size={13} className="text-indigo-400" />
              <span className="text-indigo-300 text-xs font-semibold">2,340 XP</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}