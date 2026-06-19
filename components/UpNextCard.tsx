'use client'

import { motion } from 'framer-motion'
import { Clock, Play } from 'lucide-react'

export default function UpNextCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="rounded-2xl p-6 bg-[#1a1a2e]/50 border border-white/5 h-full"
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center">
          <Play size={14} className="text-indigo-400" />
        </div>
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">UP NEXT</span>
      </div>
      
      {/* Course Info */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-3">React Server Components</h3>
        <p className="text-sm text-slate-400 mb-4">Advanced React Patterns · Lesson 18</p>
        
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <Clock size={16} />
          <span>~22 min</span>
        </div>
      </div>
      
      {/* Continue Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
      >
        <Play size={16} fill="currentColor" />
        Continue
      </motion.button>
    </motion.div>
  )
}
