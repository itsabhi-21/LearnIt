'use client'

import { motion } from 'framer-motion'

export default function SkeletonTile() {
  return (
    <motion.article 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative rounded-2xl p-6 bg-linear-to-br from-[#0f0f1a] via-[#0d0d14] to-[#0a0a0f] border border-white/[0.07] overflow-hidden"
    >
      {/* Shimmer effect */}
      <motion.div
        animate={{
          x: ['-100%', '200%'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute inset-0 bg-linear-to-r from-transparent via-white/3 to-transparent"
      />

      <div className="relative z-10 flex flex-col gap-5">
        <div className="flex items-center gap-3.5">
          <motion.div 
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-12 h-12 rounded-xl bg-white/6" 
          />
          <div className="flex-1 space-y-2">
            <motion.div 
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="h-4 w-32 rounded-md bg-white/6" 
            />
            <motion.div 
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 1.5, delay: 0.1, repeat: Infinity, ease: "easeInOut" }}
              className="h-3 w-20 rounded-md bg-white/5" 
            />
          </div>
        </div>
        <div className="space-y-2.5">
          <div className="flex justify-between items-center">
            <motion.div 
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 1.5, delay: 0.2, repeat: Infinity, ease: "easeInOut" }}
              className="h-3 w-16 rounded-md bg-white/5" 
            />
            <motion.div 
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 1.5, delay: 0.3, repeat: Infinity, ease: "easeInOut" }}
              className="h-3 w-10 rounded-md bg-white/6" 
            />
          </div>
          <motion.div 
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 1.5, delay: 0.4, repeat: Infinity, ease: "easeInOut" }}
            className="h-2 w-full rounded-full bg-white/6" 
          />
        </div>
      </div>
    </motion.article>
  )
}