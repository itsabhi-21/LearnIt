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
      whileHover={{ scale: 1.002, y: -2 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="relative rounded-[28px] p-8 md:p-12 overflow-hidden bg-gradient-to-br from-[#12121d] via-[#0d0d14] to-[#0a0a0f] border border-white/[0.06] flex flex-col justify-between h-full min-h-[280px] group shadow-2xl shadow-black/40"
    >
      {/* Animated gradient orbs with improved colors */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-indigo-500/25 via-purple-500/20 to-transparent rounded-full blur-[120px] pointer-events-none animate-[pulse-glow_6s_ease-in-out_infinite]" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-purple-600/20 via-pink-500/15 to-transparent rounded-full blur-[100px] pointer-events-none animate-[pulse-glow_8s_ease-in-out_infinite]" />
      
      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 rounded-[28px] opacity-[0.02] pointer-events-none mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Gradient border glow on hover */}
      <div className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-[0.5px] rounded-[27.5px] bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent" />
      </div>

      <div className="relative z-10 space-y-2">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-slate-400 text-[13px] font-medium tracking-wider uppercase mb-3 opacity-70"
        >
          Good morning 👋
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-[42px] md:text-[52px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-200 leading-[1.1] tracking-tight"
        >
          Welcome back, Abhinav
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-slate-500 text-[15px] mt-4 max-w-lg leading-relaxed"
        >
          Ready to continue your learning journey?
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="relative z-10 flex items-center gap-3 mt-10 flex-wrap"
      >
        <motion.div 
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          className="flex items-center gap-3 bg-gradient-to-br from-orange-500/20 via-orange-500/10 to-orange-600/5 border border-orange-400/30 rounded-[14px] px-5 py-3 backdrop-blur-xl shadow-xl shadow-orange-500/15 hover:shadow-2xl hover:shadow-orange-500/25 transition-shadow duration-300"
        >
          <Flame size={20} className="text-orange-300 drop-shadow-[0_2px_12px_rgba(251,146,60,0.6)]" strokeWidth={2.5} />
          <div className="flex flex-col">
            <span className="text-orange-200 text-[15px] font-bold tracking-tight">12 Day Streak</span>
          </div>
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          className="flex items-center gap-3 bg-gradient-to-br from-yellow-500/20 via-yellow-500/10 to-amber-600/5 border border-yellow-400/30 rounded-[14px] px-5 py-3 backdrop-blur-xl shadow-xl shadow-yellow-500/15 hover:shadow-2xl hover:shadow-yellow-500/25 transition-shadow duration-300"
        >
          <Trophy size={20} className="text-yellow-300 drop-shadow-[0_2px_12px_rgba(250,204,21,0.6)]" strokeWidth={2.5} />
          <span className="text-yellow-200 text-[15px] font-bold tracking-tight">4 Courses Active</span>
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          className="flex items-center gap-3 bg-gradient-to-br from-indigo-500/20 via-indigo-500/10 to-purple-600/5 border border-indigo-400/30 rounded-[14px] px-5 py-3 backdrop-blur-xl shadow-xl shadow-indigo-500/15 hover:shadow-2xl hover:shadow-indigo-500/25 transition-shadow duration-300"
        >
          <Sparkles size={18} className="text-indigo-300 drop-shadow-[0_2px_12px_rgba(129,140,248,0.6)]" strokeWidth={2.5} />
          <span className="text-indigo-200 text-[15px] font-bold tracking-tight">2,340 XP</span>
        </motion.div>
      </motion.div>
    </motion.article>
  )
}