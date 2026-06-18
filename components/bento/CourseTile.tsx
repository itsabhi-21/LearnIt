'use client'

import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { LucideProps } from 'lucide-react'
import ProgressBar from '@/components/ui/ProgressBar'
import { Course } from '@/types'
import { itemVariants } from './BentoGrid'

interface CourseTileProps {
  course: Course
  index: number 
}

const colorCycle = ['indigo', 'blue', 'green', 'orange']

function DynamicIcon({ name, ...props }: { name: string } & LucideProps) {
  const Icon = (Icons as unknown as Record<string, React.ComponentType<LucideProps>>)[name]
  if (!Icon) return <Icons.BookOpen {...props} />
  return <Icon {...props} />
}

export default function CourseTile({ course }: CourseTileProps) {
  const colorIndex = course.title.length % colorCycle.length
  const color = colorCycle[colorIndex]

  const iconBgMap: Record<string, string> = {
    indigo: 'bg-gradient-to-br from-indigo-500/20 to-indigo-600/10 text-indigo-300 ring-1 ring-indigo-400/30 shadow-lg shadow-indigo-500/20',
    blue: 'bg-gradient-to-br from-blue-500/20 to-blue-600/10 text-blue-300 ring-1 ring-blue-400/30 shadow-lg shadow-blue-500/20',
    green: 'bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 text-emerald-300 ring-1 ring-emerald-400/30 shadow-lg shadow-emerald-500/20',
    orange: 'bg-gradient-to-br from-orange-500/20 to-orange-600/10 text-orange-300 ring-1 ring-orange-400/30 shadow-lg shadow-orange-500/20',
  }

  const glowMap: Record<string, string> = {
    indigo: 'hover:shadow-[0_8px_40px_rgba(99,102,241,0.25)] hover:border-indigo-400/40',
    blue: 'hover:shadow-[0_8px_40px_rgba(59,130,246,0.25)] hover:border-blue-400/40',
    green: 'hover:shadow-[0_8px_40px_rgba(16,185,129,0.25)] hover:border-emerald-400/40',
    orange: 'hover:shadow-[0_8px_40px_rgba(249,115,22,0.25)] hover:border-orange-400/40',
  }

  const gradientMap: Record<string, string> = {
    indigo: 'from-indigo-500/8 via-purple-500/5 to-transparent',
    blue: 'from-blue-500/8 via-cyan-500/5 to-transparent',
    green: 'from-emerald-500/8 via-teal-500/5 to-transparent',
    orange: 'from-orange-500/8 via-amber-500/5 to-transparent',
  }

  const bgGlowMap: Record<string, string> = {
    indigo: 'bg-indigo-500/10',
    blue: 'bg-blue-500/10',
    green: 'bg-emerald-500/10',
    orange: 'bg-orange-500/10',
  }

  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`group relative rounded-2xl p-6 bg-gradient-to-br from-[#0f0f1a] via-[#0d0d14] to-[#0a0a0f] border border-white/[0.07] transition-all duration-500 cursor-pointer ${glowMap[color]}`}
    >
      {/* Animated gradient background */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradientMap[color]} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
      
      {/* Glowing orb effect */}
      <div className={`absolute top-0 right-0 w-32 h-32 ${bgGlowMap[color]} rounded-full blur-[60px] opacity-0 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none`} />

      {/* Noise texture */}
      <div
        className="absolute inset-0 rounded-2xl opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 flex flex-col gap-5">
        {/* Icon + Title row */}
        <div className="flex items-start gap-3.5">
          <motion.div 
            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${iconBgMap[color]} backdrop-blur-sm`}
          >
            <DynamicIcon name={course.icon_name} size={20} strokeWidth={2.5} />
          </motion.div>
          <div className="flex-1 min-w-0 pt-1">
            <h3 className="text-base font-semibold text-slate-100 leading-snug mb-1 group-hover:text-white transition-colors">
              {course.title}
            </h3>
            <p className="text-xs text-slate-500 font-medium">In progress</p>
          </div>
        </div>

        {/* Progress section */}
        <div className="flex flex-col gap-2.5">
          <div className="flex justify-between items-center">
            <span className="text-xs text-slate-500 font-medium tracking-wide">Progress</span>
            <span className="text-sm font-bold text-slate-200 tabular-nums">{course.progress}%</span>
          </div>
          <ProgressBar value={course.progress} color={color} />
        </div>
      </div>
    </motion.article>
  )
}