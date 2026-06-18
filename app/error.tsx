'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, RefreshCw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        className="relative flex flex-col items-center gap-6 text-center max-w-md p-10 rounded-3xl bg-gradient-to-br from-[#0f0f1a] via-[#0d0d14] to-[#0a0a0f] border border-white/[0.08]"
      >
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-transparent rounded-3xl pointer-events-none" />
        <div className="absolute -top-16 -right-16 w-48 h-48 bg-red-500/10 rounded-full blur-[80px] pointer-events-none" />

        <motion.div
          animate={{ 
            rotate: [0, -10, 10, -10, 0],
            scale: [1, 1.1, 1, 1.1, 1]
          }}
          transition={{ 
            duration: 0.6,
            delay: 0.2
          }}
          className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-600/10 border border-red-400/30 flex items-center justify-center shadow-lg shadow-red-500/20"
        >
          <AlertTriangle size={40} className="text-red-400" strokeWidth={2} />
        </motion.div>

        <div className="relative z-10 space-y-2">
          <h2 className="text-xl font-bold text-slate-200">Something went wrong</h2>
          <p className="text-slate-500 text-sm leading-relaxed">{error.message}</p>
        </div>

        <motion.button
          onClick={reset}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          className="relative z-10 flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 text-indigo-300 text-sm font-medium hover:from-indigo-500/30 hover:to-purple-500/30 shadow-lg shadow-indigo-500/20 transition-all"
        >
          <RefreshCw size={16} />
          Try again
        </motion.button>
      </motion.div>
    </div>
  )
}