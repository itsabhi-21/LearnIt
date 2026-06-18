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
    indigo: 'bg-gradient-to-br from-indigo-500/25 via-indigo-500/15 to-indigo-600/10 text-indigo-200 ring-1 ring-indigo-400/40 shadow-xl shadow-indigo-500/30',
    blue: 'bg-gradient-to-br from-blue-500/25 via-blue-500/15 to-blue-600/10 text-blue-200 ring-1 ring-blue-400/40 shadow-xl shadow-blue-500/30',
    green: 'bg-gradient-to-br from-emerald-500/25 via-emerald-500/15 to-emerald-600/10 text-emerald-200 ring-1 ring-emerald-400/40 shadow-xl shadow-emerald-500/30',
    orange: 'bg-gradient-to-br from-orange-500/25 via-orange-500/15 to-orange-600/10 text-orange-200 ring-1 ring-orange-400/40 shadow-xl shadow-orange-500/30',
  }

  const glowMap: Record<string, string> = {
    indigo: 'hover:shadow-[0_12px_50px_rgba(99,102,241,0.35)] hover:border-indigo-400/50',
    blue: 'hover:shadow-[0_12px_50px_rgba(59,130,246,0.35)] hover:border-blue-400/50',
    green: 'hover:shadow-[0_12px_50px_rgba(16,185,129,0.35)] hover:border-emerald-400/50',
    orange: 'hover:shadow-[0_12px_50px_rgba(249,115,22,0.35)] hover:border-orange-400/50',
  }

  const gradientMap: Record<string, string> = {
    indigo: 'from-indigo-500/12 via-purple-500/8 to-transparent',
    blue: 'from-blue-500/12 via-cyan-500/8 to-transparent',
    green: 'from-emerald-500/12 via-teal-500/8 to-transparent',
    orange: 'from-orange-500/12 via-amber-500/8 to-transparent',
  }

  const bgGlowMap: Record<string, string> = {
    indigo: 'bg-indigo-500/15',
    blue: 'bg-blue-500/15',
    green: 'bg-emerald-500/15',
    orange: 'bg-orange-500/15',
  }

  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ scale: 1.03, y: -6 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 350, damping: 22 }}
      className={`group relative rounded-[22px] p-6 bg-gradient-to-br from-[#12121d]/90 via-[#0d0d14] to-[#0a0a0f] border border-white/[0.06] transition-all duration-500 cursor-pointer shadow-xl shadow-black/40 ${glowMap[color]}`}
    >
      {/* Animated gradient background */}
      <div className={`absolute inset-0 rounded-[22px] bg-gradient-to-br ${gradientMap[color]} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
      
      {/* Glowing orb effect */}
      <div className={`absolute -top-12 -right-12 w-40 h-40 ${bgGlowMap[color]} rounded-full blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

      {/* Noise texture */}
      <div
        className="absolute inset-0 rounded-[22px] opacity-[0.025] pointer-events-none mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.1' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 flex flex-col gap-6">
        {/* Icon + Title row */}
        <div className="flex items-start gap-4">
          <motion.div 
            whileHover={{ rotate: [0, -8, 8, -8, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className={`w-14 h-14 rounded-[16px] flex items-center justify-center shrink-0 ${iconBgMap[color]} backdrop-blur-sm group-hover:shadow-2xl transition-shadow duration-500`}
          >
            <DynamicIcon name={course.icon_name} size={22} strokeWidth={2.5} />
          </motion.div>
          <div className="flex-1 min-w-0 pt-1.5">
            <h3 className="text-[16px] font-bold text-slate-50 leading-tight mb-1.5 group-hover:text-white transition-colors tracking-tight">
              {course.title}
            </h3>
            <p className="text-[13px] text-slate-500 font-medium">In progress</p>
          </div>
        </div>

        {/* Progress section */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <span className="text-xs text-slate-500 font-semibold tracking-wider uppercase">Progress</span>
            <span className="text-base font-bold text-slate-100 tabular-nums">{course.progress}%</span>
          </div>
          <ProgressBar value={course.progress} color={color} />
        </div>
      </div>
    </motion.article>
  )
}