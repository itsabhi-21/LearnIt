'use client'

import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { LucideProps } from 'lucide-react'
import ProgressBar from '@/components/ui/ProgressBar'
import { Course } from '@/types'

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

export default function CourseTile({ course, index }: CourseTileProps) {
  const colorIndex = course.title.length % colorCycle.length
  const color = colorCycle[colorIndex]

  const iconBgMap: Record<string, string> = {
    indigo: 'bg-indigo-500/20 text-indigo-300',
    blue: 'bg-blue-500/20 text-blue-300',
    green: 'bg-emerald-500/20 text-emerald-300',
    orange: 'bg-orange-500/20 text-orange-300',
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.02, y: -2 }}
      className="relative rounded-2xl p-5 bg-[#1a1a2e]/50 border border-white/[0.05] cursor-pointer hover:border-white/[0.1] transition-all"
    >
      {/* Icon + Title */}
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-xl ${iconBgMap[color]} flex items-center justify-center`}>
          <DynamicIcon name={course.icon_name} size={18} strokeWidth={2.5} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-white truncate mb-1">
            {course.title}
          </h3>
          <p className="text-xs text-slate-500">In progress · 21 lessons</p>
        </div>
      </div>

      {/* Progress section */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Progress</span>
          <span className="text-sm font-bold text-white">{course.progress}%</span>
        </div>
        <ProgressBar value={course.progress} color={color} />
      </div>
    </motion.article>
  )
}