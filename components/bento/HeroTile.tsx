'use client'

import { motion } from 'framer-motion'
import { Flame, Trophy, Sparkles } from 'lucide-react'
import { itemVariants } from './BentoGrid'

export default function HeroTile() {
  return (
    <motion.article
      variants={itemVariants}
      initial="hidden"
      animate="show"
      whileHover={{ scale: 1.005 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative rounded-3xl p-8 md:p-10 overflow-hidden bg-gradient-to-br from-[#0f0f1a] via-[#0d0d14] to-[#0a0a0f] border border-white/[0.08] flex flex-col justify-between h-full min-h-[280px] group"
    >
      {/* Animated gradient orbs */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-500/20 rounded-full blur-[80px] pointer-events-none animate-[pulse-glow_4s_ease-in-out_infinite]" />
      <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-purple-600/15 rounded-full blur-[100px] pointer-events-none animate-[pulse-glow_5s_ease-in-out_infinite]" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[90px] pointer-events-none animate-[pulse-glow_6s_ease-in-out_infinite]" />
      
      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 rounded-3xl opacity-[0.015] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Gradient border overlay on hover */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent" />

      <div className="relative z-10 space-y-1">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-sm font-medium tracking-wide mb-2"
        >
          Good morning 👋
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300 leading-tight"
        >
          Welcome back, Abhinav
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-slate-500 text-sm mt-3 max-w-lg"
        >
          Ready to continue your learning journey?
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative z-10 flex items-center gap-3 mt-8 flex-wrap"
      >
        <motion.div 
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          className="flex items-center gap-2.5 bg-gradient-to-br from-orange-500/15 to-orange-600/10 border border-orange-500/25 rounded-xl px-4 py-2.5 backdrop-blur-sm shadow-lg shadow-orange-500/10"
        >
          <Flame size={18} className="text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.5)]" />
          <span className="text-orange-300 text-sm font-semibold tracking-wide">12 Day Streak</span>
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          className="flex items-center gap-2.5 bg-gradient-to-br from-yellow-500/15 to-amber-600/10 border border-yellow-500/25 rounded-xl px-4 py-2.5 backdrop-blur-sm shadow-lg shadow-yellow-500/10"
        >
          <Trophy size={18} className="text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" />
          <span className="text-yellow-300 text-sm font-semibold tracking-wide">4 Courses Active</span>
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          className="flex items-center gap-2.5 bg-gradient-to-br from-indigo-500/15 to-purple-600/10 border border-indigo-500/25 rounded-xl px-4 py-2.5 backdrop-blur-sm shadow-lg shadow-indigo-500/10"
        >
          <Sparkles size={16} className="text-indigo-400 drop-shadow-[0_0_8px_rgba(129,140,248,0.5)]" />
          <span className="text-indigo-300 text-sm font-semibold tracking-wide">2,340 XP</span>
        </motion.div>
      </motion.div>
    </motion.article>
  )
}