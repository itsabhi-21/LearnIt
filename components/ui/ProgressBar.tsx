'use client'

import { motion } from 'framer-motion'

interface ProgressBarProps {
  value: number
  color?: string
}

const gradientMap: Record<string, string> = {
  indigo: 'from-indigo-500 via-purple-500 to-indigo-600',
  blue: 'from-blue-500 via-cyan-400 to-blue-600',
  green: 'from-emerald-500 via-teal-400 to-emerald-600',
  orange: 'from-orange-500 via-amber-400 to-orange-600',
}

const glowMap: Record<string, string> = {
  indigo: 'shadow-[0_0_12px_rgba(99,102,241,0.7)]',
  blue: 'shadow-[0_0_12px_rgba(59,130,246,0.7)]',
  green: 'shadow-[0_0_12px_rgba(16,185,129,0.7)]',
  orange: 'shadow-[0_0_12px_rgba(249,115,22,0.7)]',
}

export default function ProgressBar({ value, color = 'indigo' }: ProgressBarProps) {
  const gradient = gradientMap[color] ?? gradientMap['indigo']
  const glow = glowMap[color] ?? glowMap['indigo']

  return (
    <div className="relative w-full h-2 rounded-full bg-white/[0.06] overflow-hidden backdrop-blur-sm">
      <motion.div
        initial={{ width: '0%' }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1.5, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
        className={`relative h-full rounded-full bg-gradient-to-r ${gradient} ${glow}`}
      >
        {/* Shimmer effect */}
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '200%' }}
          transition={{
            duration: 2,
            delay: 1.8,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        />
      </motion.div>
    </div>
  )
}